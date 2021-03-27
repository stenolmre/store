import React from 'react'
import Cookies from 'js-cookie'

import GetProducts from '@/utils/getProducts'
import { calcTotalPriceTwoArr, calcTotalPriceDiscountTwoArr, calcDiscountTwoArr } from '@/utils/calculations'

import { useProductState } from '@/context/product'

const CheckoutSummary = ({ shipping }) => {
  const order = Cookies.get('orderId') ? JSON.parse(Cookies.get('orderId')) : ''

  const { products } = useProductState()

  return <GetProducts>
    <div className="checkout_summary">
      <p style={{ margin: '0 0 25px 0' }}><strong>Order Summary</strong></p>
      <SummaryItem name="Price" value={calcTotalPriceDiscountTwoArr(products, order.products, 20).toFixed(2)}/>
      <SummaryItem name="Tax (20%)" value={calcDiscountTwoArr(products, order.products, 20)}/>
      <br/>
      <SummaryItem shipping name="Shipping" value={shipping.type}/>
      <SummaryItem name="Shipping Cost" value={(shipping.price / 100).toFixed(2)}/>
      <br/>
      <SummaryItem discount name="Coupon" value={order.discount}/>
      <SummaryItem name="Saving" value={calcDiscountTwoArr(products, order.products, order.discount)}/>
      <br/>
      <SummaryItem total name="Total" value={(calcTotalPriceDiscountTwoArr(products, order.products, order.discount) + (shipping.price / 100)).toFixed(2)}/>
    </div>
  </GetProducts>
}

const SummaryItem = ({ name, value, total, discount, shipping }) => {
  return <div className="cart_summary_item">
    {
      total ? <strong><p>{name}</p></strong> : <p>{name}</p>
    }
    {
      total
        ? <strong><p>{value}€</p></strong>
        : <p>{value}{discount ? '%' : shipping ? '' : '€'}</p>
    }
  </div>
}

export default CheckoutSummary
