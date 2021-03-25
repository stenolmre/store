import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import {loadStripe} from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import PersonalDetails from './personaldetails'
import Shipping from './shipping'
import PaymentDetails from './paymentdetails'

const stripePromise = loadStripe(process.env.STRIPE_PK_TEST)

const Sections = ({ step, setStep }) => {
  const router = useRouter()

  const [personalData, setPersonalData] = useState({ name: '', email: '', phone: '', address: '', city: '', country: '', postal_code: '' })
  const [shipping, setShipping] = useState({ type: '', location: '', price: '' })

  const stripe = useStripe()
  const elements = useElements()

  const chargeCustomer = async () => {
    try {
      const config = { headers: { 'Content-Type': 'application/json' } }
      const body = JSON.stringify({ amount: 1000, receipt_email: personalData.email })

      const { data } = await axios.post('/api/charge', body, config)

      const { error, paymentIntent } = await stripe.confirmCardPayment(data.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: personalData.name,
            email: personalData.email,
            address: {
              country: personalData.country,
              city: personalData.city,
              line1: personalData.address,
              postal_code: personalData.postal_code
            }
          }
        }
      })

      if (error) throw new Error(error.message)

      if (paymentIntent.status === 'succeeded') {
        router.push(`/`)
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  switch (step) {
    case 'personal':
      return <PersonalDetails setStep={setStep} personalData={personalData} setPersonalData={setPersonalData}/>
    case 'shipping':
      return <Shipping setStep={setStep} shipping={shipping} setShipping={setShipping}/>
    case 'payment':
      return <PaymentDetails setStep={setStep} pay={chargeCustomer}/>
    default:
      return <PersonalDetails setStep={setStep}/>
  }
}

const Checkout = () => {
  const [step, setStep] = useState('personal')

  return <div className="checkout">
    <h1>Checkout</h1>
    <div className="checkout_steps">
      <p className={step === 'personal' ? "active_checkout_step" : ""}>Personal Details</p>
      <p className={step === 'shipping' ? "active_checkout_step" : ""}>Shipping</p>
      <p className={step === 'payment' ? "active_checkout_step" : ""}>Payment</p>
    </div>
    <Elements stripe={stripePromise}>
      <Sections step={step} setStep={setStep}/>
    </Elements>
  </div>
}

export default Checkout
