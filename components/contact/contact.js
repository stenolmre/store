import React from 'react'

import Form from '@/contact/form'

const Contact = () => {
  return <div className="contact_container">
    <div className="contact">
      <Form/>
      <div className="contact_details">
        <h1>Contact Information</h1>
        <Link href="mailto:google@gmail.com" icon="fas fa-envelope" name="google@gmail.com"/>
        <Link href="tel:37255599900" icon="fas fa-phone" name="+372 555 999 00"/>
        <Link href="/" icon="fas fa-map-pin" name="My company location"/>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob">
          <path fill="#B4BABF" d="M36.9,-53.6C49.3,-41.9,61.8,-33,70.4,-19.7C79,-6.5,83.8,11.2,79.1,25.8C74.5,40.4,60.4,52.1,45.6,63.7C30.9,75.4,15.4,87.1,0,87.1C-15.4,87.1,-30.9,75.4,-45.1,63.6C-59.3,51.7,-72.4,39.7,-74.1,26C-75.9,12.3,-66.4,-3.1,-61,-19.9C-55.6,-36.7,-54.4,-54.9,-44.9,-67.6C-35.4,-80.3,-17.7,-87.5,-2.7,-83.8C12.3,-80,24.6,-65.4,36.9,-53.6Z" transform="translate(100 100)"/>
        </svg>
        <div className="contact_details_social">
          <Link href="https://instagram.com" icon="fab fa-instagram"/>
          <Link href="https://facebook.com" icon="fab fa-facebook-f"/>
          <Link href="https://twitter.com" icon="fab fa-twitter"/>
          <Link href="https://pinterest.com" icon="fab fa-pinterest"/>
          <Link href="https://linkedin.com" icon="fab fa-linkedin-in"/>
        </div>
      </div>
    </div>
  </div>
}

const Link = ({url, icon, name}) => <div className="contact_detail">
  <a href={url}><i className={icon}/> {name}</a>
</div>

export default Contact
