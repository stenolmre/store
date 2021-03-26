import React from 'react'

import { calcTotalPrice, calcTotalPriceDiscount, calcDiscount, calcTax, calcTotalWithoutTax } from '@/utils/calculations'

const CheckoutSummary = ({ cartItems }) => {
  return <div className="checkout_summary">
    <p style={{ margin: '0 0 25px 0' }}><strong>Order Summary</strong></p>
    <SummaryItem name="Price" value={(calcTotalWithoutTax(cartItems) / 100).toFixed(2)}/>
    <SummaryItem name="Tax (20%)" value={(calcTax(cartItems) / 100).toFixed(2)}/>
    <br />
    <SummaryItem name="Coupon" value={(calcTotalWithoutTax(cartItems) / 100).toFixed(2)}/>
    <SummaryItem name="Saving" value={(calcTax(cartItems) / 100).toFixed(2)}/>
    <br />
    <SummaryItem total name="Total" value={(calcTotalPrice(cartItems) / 100).toFixed(2)}/>
  </div>
}

const SummaryItem = ({ name, value, total, discount }) => {
  return <div className="cart_summary_item">
    {
      total ? <strong><p>{name}</p></strong> : <p>{name}</p>
    }
    {
      total
        ? <strong><p>{value}€</p></strong>
        : <p>{value}{discount ? '%' : '€'}</p>
    }
  </div>
}

export default CheckoutSummary
