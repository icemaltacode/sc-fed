function TaxDetails({ taxDetails }) {
    return <div className='rounded-container'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'></th>
            <th scope='col'>Weekly</th>
            <th scope='col'>Monthly</th>
            <th scope='col'>Yearly</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <th scope='col'>Gross Salary</th>
            <td>€{taxDetails.grossWeekly}</td>
            <td>€{taxDetails.grossMonthly}</td>
            <td>€{taxDetails.grossYearly}</td>
          </tr>
          <tr>
            <th scope='col'>Tax</th>
            <td>€{taxDetails.taxWeekly}</td>
            <td>€{taxDetails.taxMonthly}</td>
            <td>€{taxDetails.taxYearly}</td>
          </tr>
          <tr>
            <th scope='col'>Social Security Contribution</th>
            <td>€{taxDetails.sscWeekly}</td>
            <td>€{taxDetails.sscMonthly}</td>
            <td>€{taxDetails.sscYearly}</td>
          </tr>
          <tr>
            <th scope='col'>COLA / Bonus</th>
            <td>€{taxDetails.colaWeekly}</td>
            <td>€{taxDetails.colaMonthly}</td>
            <td>€{taxDetails.colaYearly}</td>
          </tr>
          <tr className='table-primary'>
            <th scope='col'>Net Salary</th>
            <td>€{taxDetails.netWeekly}</td>
            <td>€{taxDetails.netMonthly}</td>
            <td>€{taxDetails.netYearly}</td>
          </tr>
        </tbody>
      </table>
    </div>
  }

  export default TaxDetails;