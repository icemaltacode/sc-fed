import { useState, useEffect } from 'react';
import './App.css';
import UserDetails from './UserDetails';
import TaxDetails from './TaxDetails';

// SOURCE: https://cfr.gov.mt/en/rates/Pages/TaxRates/Tax-Rates-2023.aspx
const TAX_RATES = {
  single: [
    {from: 0, to: 9100, rate: 0, subtract: 0},
    {from: 9101, to: 14500, rate: 15, subtract: 1365},
    {from: 14501, to: 19500, rate: 25, subtract: 2815},
    {from: 19501, to: 60000, rate: 25, subtract: 2725},
    {from: 60001, to: null, rate: 35, subtract: 8725},
  ],
  married: [
    {from: 0, to: 12700, rate: 0, subtract: 0},
    {from: 12701, to: 21200, rate: 15, subtract: 1905},
    {from: 21201, to: 28700, rate: 25, subtract: 4025},
    {from: 28701, to: 60000, rate: 25, subtract: 3905},
    {from: 60001, to: null, rate: 35, subtract: 9905},
  ],
  parent: [
    {from: 0, to: 10500, rate: 0, subtract: 0},
    {from: 10501, to: 15800, rate: 15, subtract: 1575},
    {from: 15801, to: 21200, rate: 25, subtract: 3155},
    {from: 21201, to: 60000, rate: 25, subtract: 3050},
    {from: 60001, to: null, rate: 35, subtract: 9050},
  ] 
};

// SOURCE: https://cfr.gov.mt/en/rates/Pages/SSC1/SSC1-2023.aspx
const SSC_RATES = {
  A: {from: 0.10, to: 192.73, contribVal: 6.62, contribPct: null, contribMax: null},
  B: {from: 0.10, to: 192.73, contribVal: 19.27, contribPct: 10, contribMax: null},
  C: [
    {from: 192.74, to: 392.76, contribVal: null, contribPct: 10, contribMax: null}, // <= 31/12/1961
    {from: 192.74, to: 515.98, contribVal: null, contribPct: 10, contribMax: null}
  ],
  D: [
    {from: 392.77, to: null, contribVal: 39.28, contribPct: null, contribMax: null}, // <= 31/12/1961
    {from: 515.99, to: null, contribVal: 51.60, contribPct: null, contribMax: null}
  ],
  E: {from: null, to: null, contribVal: null, contribPct: 10, contribMax: 4.38},
  F: {from: null, to: null, contribVal: null, contribPct: 10, contribMax: 7.94}
}

// SOURCE: https://dier.gov.mt/en/Employment-Conditions/Wages/Pages/Bonus-and-Weekly-Allowances.aspx
const COLA = 512.52;

function App() {
  const [userDetails, setUserDetails] = useState({
    salaryYearly: 30000,
    salaryMonthly: 2500,
    salaryWeekly: 576.92,
    dob: new Date(new Date().getFullYear() - 18, 0, 1),
    taxGroup: 'single',
    student: false,
  });

  const [taxDetails, setTaxDetails] = useState({});

  const changeHandler = target => {
    if (['salaryYearly', 'salaryMonthly', 'salaryWeekly'].includes(target.name)) {
      // Salary
      let salaryYearly = target.name === 'salaryYearly' ? target.value : 0;
      let salaryMonthly = target.name === 'salaryMonthly' ? target.value : 0;
      let salaryWeekly = target.name === 'salaryWeekly' ? target.value : 0;
      
      if (target.name === 'salaryYearly') {
        salaryMonthly = (salaryYearly / 12).toFixed(2);
        salaryWeekly = (salaryYearly / 52).toFixed(2);
      } else if (target.name === 'salaryMonthly') {
        salaryYearly = salaryMonthly * 12;
        salaryWeekly = (salaryMonthly / 4).toFixed(2);
      } else {
        salaryYearly = salaryWeekly * 52;
        salaryMonthly = salaryWeekly * 4;
      }

      setUserDetails(oldDetails => ({ ...oldDetails, 
        salaryYearly: salaryYearly, 
        salaryMonthly: salaryMonthly, 
        salaryWeekly: salaryWeekly}))
    } else if (target.name === 'dob') { 
      // DOB
      const dateParts = target.value.split('-');
      const newDob = new Date(dateParts[0], dateParts[1]-1, dateParts[2], 10, 0, 0);
      setUserDetails(oldDetails => ({ ...oldDetails, [target.name]: newDob }));
    } else if (target.name === 'student') {
      // Student status
      setUserDetails(oldDetails => ({ ...oldDetails, [target.name]: target.checked }));
    } else {
      // Generic handler
      setUserDetails(oldDetails => ({ ...oldDetails, [target.name]: target.value }));
    }
  }

  useEffect(() => {
    if (!userDetails.dob) return;

    // Tax
    const applicableTaxRate = TAX_RATES[userDetails.taxGroup].filter(
      rate => rate.from <= userDetails.salaryYearly && rate.to >= userDetails.salaryYearly)[0];
    const taxYearly = (applicableTaxRate.rate / 100 * userDetails.salaryYearly) - applicableTaxRate.subtract;
    
    // SSC
    let sscCategory = null;
    let netWeeklySalary = userDetails.salaryWeekly - (taxYearly / 52);
    const before1962 = userDetails.dob < new Date(1962, 1, 1);
    const age = Math.abs(new Date(Date.now() - userDetails.dob.getTime()).getFullYear() - 1970);
    if (age < 18 && !userDetails.student) {
      sscCategory = SSC_RATES['A'];
    } else if (before1962) {
      sscCategory = netWeeklySalary <= SSC_RATES['C'][0].to ? SSC_RATES['C'][0] : SSC_RATES['D'][0];
    } else if (netWeeklySalary >= 0.10) {
      if (netWeeklySalary <= SSC_RATES['B'].to) {
        sscCategory = SSC_RATES['B'];
      } else if (netWeeklySalary <= SSC_RATES['C'][1].to) {
        sscCategory = SSC_RATES['C'][1];
      } else {
        sscCategory = SSC_RATES['D'][1];
      }
    } else if (userDetails.student) {
      sscCategory = age < 18 ? SSC_RATES['E'] : SSC_RATES['F'];
    }
    let sscWeekly = 0;
    sscWeekly = sscCategory.contribVal ? sscCategory.contribVal : sscCategory.contribPct / 100 * netWeeklySalary;
    sscWeekly = sscCategory.contribMax ? Math.min(sscWeekly, sscCategory.contribMax) : sscWeekly;

    setTaxDetails({
      taxYearly: taxYearly,
      taxMonthly: (taxYearly / 12).toFixed(2),
      taxWeekly: (taxYearly / 52).toFixed(2),
      sscWeekly: sscWeekly.toFixed(2),
      sscMonthly: (sscWeekly * 4.5).toFixed(2),
      sscYearly: (sscWeekly * 52).toFixed(2),
      grossYearly: userDetails.salaryYearly,
      grossMonthly: userDetails.salaryMonthly,
      grossWeekly: userDetails.salaryWeekly,
      colaYearly: COLA,
      colaMonthly: (COLA / 12).toFixed(2),
      colaWeekly: (COLA / 52).toFixed(2),
      netWeekly: (userDetails.salaryWeekly - (taxYearly/52) - sscWeekly).toFixed(2),
      netMonthly: (userDetails.salaryMonthly - (taxYearly/12) - (sscWeekly * 4)).toFixed(2),
      netYearly: (userDetails.salaryYearly - taxYearly - (sscWeekly * 12)).toFixed(2)
    });
  }, [userDetails])

  return <div className='container-fluid'>
    <div className='rounded-container'>
      <h3><i className='bi-piggy-bank' /> SalaryBuddy</h3>
    </div>
    <UserDetails userDetails={userDetails} changeHandler={changeHandler}/>
    <TaxDetails taxDetails={taxDetails} />
  </div>
}

export default App;
