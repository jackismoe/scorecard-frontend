import React from 'react'

const LandingPageForm = () => {
  return(
    <div>
      <form className='landing-page-form'>
        <label>This Will Be The Landing Page Form</label>
        <input type='text'placeholder='This will be the form'/>
        <label>This Will Be The Landing Page Form</label>
        <input type='text'placeholder='This will be the form'/>
        <label>This Will Be The Landing Page Form</label>
        <input type='text'placeholder='This will be the form'/>
      </form>
      <input className='landing-page-submit' type='submit' value='Submit'/>
    </div>
  )
}

export default LandingPageForm