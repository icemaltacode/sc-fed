function UserDetails({ userDetails, changeHandler }) {
    const onChange = evt => {
      changeHandler(evt.target);
    }
  
    return <div className='rounded-container'>
      <div className='row g-3 mb-3'>      
          <div className='col-md-4'>
              <label htmlFor='salaryYearly' className='form-label'>Yearly Salary</label>
              <div className='input-group'>
                <div className='input-group-text'>€</div>
                <input id='salaryYearly' name='salaryYearly' type='number' className='form-control' onChange={onChange} value={userDetails.salaryYearly} />
              </div>
          </div>
          <div className='col-md-4'>
              <label htmlFor='salaryMonthly' className='form-label'>Monthly Salary</label>
              <div className='input-group'>
                <div className='input-group-text'>€</div>
                <input id='salaryMonthly' name='salaryMonthly' type='number' className='form-control' onChange={onChange} value={userDetails.salaryMonthly} />
              </div>
          </div>
          <div className='col-md-4'>
              <label htmlFor='salaryWeekly' className='form-label'>Weekly Salary</label>
              <div className='input-group'>
                <div className='input-group-text'>€</div>
                <input id='salaryWeekly' name='salaryWeekly' type='number' className='form-control' onChange={onChange} value={userDetails.salaryWeekly} />
              </div>
          </div>
      </div>
      <div className='row g-3 mb-3'>
        <div className='col-md-4'>
          <label htmlFor='dob' className='form-label'>Date of Birth</label>
          <input id='dob' name='dob' type='date' className='form-control' onChange={onChange} value={userDetails.dob.toISOString().split('T')[0]} />
        </div>
        <div className='col-md-4'>
          <div className='row'>
            <div className='col'>
              <label className='form-label'>Tax Group</label>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='taxGroup' id='taxGroupSingle' checked={userDetails.taxGroup === 'single'} value='single' onChange={onChange}/>
                <label htmlFor='taxGroupSingle' className='form-check-label'>Single</label>
              </div>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='taxGroup' id='taxGroupParent' checked={userDetails.taxGroup === 'parent'} value='parent' onChange={onChange}/>
                <label htmlFor='taxGroupParent' className='form-check-label'>Parent</label>
              </div>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='radio' name='taxGroup' id='taxGroupMarried' checked={userDetails.taxGroup === 'married'} value='married' onChange={onChange} />
                <label htmlFor='taxGroupMarried' className='form-check-label'>Married</label>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='row'>
            <div className='col'>
              <label className='form-label'>Student Status</label>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' id='student' name='student' checked={userDetails.student} onChange={onChange} />
                <label className='form-check-label' htmlFor='student'>I am a student</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
  
  export default UserDetails;