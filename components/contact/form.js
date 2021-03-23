import React, { useState } from 'react'

const Form = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' })

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value })

  return <div className="form_contact">
    <h1>Get in touch</h1>

    <label>Name <span style={{ color: 'red' }}>*</span></label>
    <input name="name" value={data.name} onChange={onChange}/>
    <label>Email <span style={{ color: 'red' }}>*</span></label>
    <input name="email" value={data.email} onChange={onChange}/>
    <label>Message <span style={{ color: 'red' }}>*</span></label>
    <textarea name="message" value={data.message} onChange={onChange}/>
    <button>Send</button>
  </div>
}

export default Form
