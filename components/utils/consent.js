import React from 'react'

const Consent = ({ onClick }) => {
  return <div className="consent">
    <h4>We need your consent.</h4>
    <p>We may store and access personal data like cookies (the techy kind) on your device and process such data to personalise your eStore experience.</p>
    <button onClick={onClick}>Fine by me</button>
  </div>
}

export default Consent
