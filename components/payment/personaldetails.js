import React, { useState } from 'react'

import validateEmail from '@/utils/validateemail'

const PersonalDetails = ({ setStep, personalData, setPersonalData }) => {
  const [errors, setErrors] = useState({})

  const onChange = e => setPersonalData({ ...personalData, [e.target.name]: e.target.value })

  const handleValidation = () => {
    let formErrors = {}
    let formIsValid = true

    if (!personalData["name"]){
      formIsValid = false
      formErrors["name"] = "Name is required"
    }

    if (!validateEmail(personalData["email"])){
      formIsValid = false
      formErrors["email"] = "Correct email is required"
    }

    if (!personalData["phone"]){
      formIsValid = false
      formErrors["phone"] = "Phone number is required"
    }

    if (!personalData["phone"]){
      formIsValid = false
      formErrors["phone"] = "Phone number is required"
    }

    if (!personalData["address"]){
      formIsValid = false
      formErrors["address"] = "Address is required"
    }

    if (!personalData["city"]){
      formIsValid = false
      formErrors["city"] = "City is required"
    }

    if (!personalData["country"]){
      formIsValid = false
      formErrors["country"] = "Country is required"
    }

    if (!personalData["postal_code"]){
      formIsValid = false
      formErrors["postal_code"] = "Postal Code is required"
    }

    setErrors(formErrors)
    return formIsValid
  }

  const onClick = () => {
    if (handleValidation()) {
      setStep('shipping')
    }
  }

  return <div className="checkout_section">
    <label>Name <span style={{ color: 'red' }}>*</span></label>
    <input name="name" value={personalData.name} onChange={onChange}/>
    {errors["name"] && <p className="form_error">{errors["name"]}</p>}
    <label>Email <span style={{ color: 'red' }}>*</span></label>
    <input name="email" value={personalData.email} onChange={onChange}/>
    {errors["email"] && <p className="form_error">{errors["email"]}</p>}
    <label>Phone <span style={{ color: 'red' }}>*</span></label>
    <input name="phone" value={personalData.phone} onChange={onChange}/>
    {errors["phone"] && <p className="form_error">{errors["phone"]}</p>}
    <label>Address <span style={{ color: 'red' }}>*</span></label>
    <input name="address" value={personalData.address} onChange={onChange}/>
    {errors["address"] && <p className="form_error">{errors["address"]}</p>}
    <label>City <span style={{ color: 'red' }}>*</span></label>
    <input name="city" value={personalData.city} onChange={onChange}/>
    {errors["city"] && <p className="form_error">{errors["city"]}</p>}
    <label>Country <span style={{ color: 'red' }}>*</span></label>
    <input name="country" value={personalData.country} onChange={onChange}/>
    {errors["country"] && <p className="form_error">{errors["country"]}</p>}
    <label>Postal Code <span style={{ color: 'red' }}>*</span></label>
    <input name="postal_code" value={personalData.postal_code} onChange={onChange}/>
    {errors["postal_code"] && <p className="form_error">{errors["postal_code"]}</p>}
    <button onClick={onClick}>Next</button>
  </div>
}

export default PersonalDetails
