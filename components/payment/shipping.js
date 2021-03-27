import React, { useState } from 'react'

const Shipping = ({ setStep, shipping, setShipping }) => {
  const next = () => {
    setStep('payment')
  }

  const previous = () => {
    setStep('personal')
  }

  return <div className="checkout_section">
    {
      shippingChoices.map(el => <div className="checkout_radio_btn_container" key={el._id}>
        <div className="checkout_radio_btn" onClick={() => setShipping({ type: el.name, location: '', price: el.price })}>
          <div className={shipping.type === el.name ? 'checkout_radio_checkbox checkout_radio_checkbox_active' : 'checkout_radio_checkbox'}>
            {
              shipping.type === el.name && <i className="fas fa-check"/>
            }
          </div>
          <div className="checkout_radio_details">
            <p>{el.name}</p>
            <p>{(el.price / 100).toFixed(2)}€</p>
          </div>
        </div>
        {
          shipping.type === el.name && <select name="location" id="location" onChange={e => setShipping({ ...shipping, location: e.target.value })}>
            <option value="" disabled={shipping.location !== ''}>Choose parcel location</option>
            {
              el.parcels.map((el, i) => <option key={i} value={el}>{el}</option>)
            }
          </select>
        }
      </div>)
    }
    <button style={{ marginRight: '25px' }} onClick={previous}><i className="fas fa-arrow-left"/></button>
    <button disabled={shipping.type === '' || shipping.location === ''} onClick={next}><i className="fas fa-arrow-right"/></button>
  </div>
}

export default Shipping

const shippingChoices = [
  {
    _id: 0,
    name: 'SmartPost',
    price: 349,
    parcels: ["Tallinna Merimetsa Selver", "Tallinna Lasnamäe Prisma", "Tallinna Haabersti Rimi", "Tallinna Torupilli Selver", "Tallinna Pirita Selver", "Tallinna Järve Keskus", "Laagri Maksimarket"]
  },
  {
    _id: 1,
    name: 'DPD',
    price: 249,
    parcels: ["Aruküla Konsum", "Tallinna Kadaka Selver	", "Tallinna Kalevipoja Rimi", "Tallinna Smuuli Maxima XX", "Vastseliina Konsum", "Valga Rimi", "Viimsi Maxima X"]
  }
]
