import React, { useState } from 'react'

import validateEmail from '@/utils/validateemail'

const Form = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

  const handleValidation = () => {
    let formErrors = {}
    let formIsValid = true

    if (!data["name"]){
      formIsValid = false
      formErrors["name"] = "Name is required"
    }

    if (!validateEmail(data["email"])){
      formIsValid = false
      formErrors["email"] = "Correct email is required"
    }

    if (!data["message"]){
      formIsValid = false
      formErrors["message"] = "Message is required"
    }

    setErrors(formErrors)
    return formIsValid
  }

  const onClick = () => {
    if (handleValidation()) {
      console.log(data)
      setSuccess(true)
    }
  }

  return <div className="form_contact">
    <h1>Get in touch</h1>
    <label>Name <span style={{ color: 'red' }}>*</span></label>
    <input name="name" value={data.name} onChange={onChange}/>
    {errors["name"] && <p className="form_error">{errors["name"]}</p>}
    <label>Email <span style={{ color: 'red' }}>*</span></label>
    <input name="email" value={data.email} onChange={onChange}/>
    {errors["email"] && <p className="form_error">{errors["email"]}</p>}
    <label>Message <span style={{ color: 'red' }}>*</span></label>
    <textarea name="message" value={data.message} onChange={onChange}/>
    {errors["message"] && <p className="form_error">{errors["message"]}</p>}
    <button onClick={onClick}>Send</button>
    {
      success && <p style={{ color: 'var(--dodgerblue)' }}>Your message is successfully sent! Thank You!</p>
    }
  </div>
}

export default Form
