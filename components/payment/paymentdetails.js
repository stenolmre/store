import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { CardElement } from '@stripe/react-stripe-js'

import { useCartState } from '@/context/cart'

import CheckoutSummary from '@/checkoutsummary'

const PaymentDetails = ({ setStep, pay }) => {
  const { cartItems, loading } = useCartState()

  const [personalData, setPersonalData] = useState()

  const onChange = e => setPersonalData({ ...personalData, [e.target.name]: e.target.value })

  const previous = () => {
    setStep('shipping')
  }

  return <div className="checkout_section">
    <CheckoutSummary cartItems={cartItems}/>
    <div className="checkout_card_element">
      <CardElement options={CARD_ELEMENT_OPTIONS}/>
    </div>
    <button style={{ marginRight: '25px' }} onClick={previous}><i className="fas fa-arrow-left"/></button>
    <button className="checkout_pay_btn" onClick={pay}>Pay</button>
  </div>
}

export default PaymentDetails

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      iconColor: '#000',
      color: 'black',
      fontSmoothing: 'antialiased',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '14px',
      '::placeholder': {
        color: 'rgba(33, 33, 33, .8)',
      }
    },
    invalid: {
      color: 'red',
      iconColor: 'red'
    }
  },
  hidePostalCode: true
}
