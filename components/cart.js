import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'

import { calcTotalPrice, calcTotalPriceDiscount, calcDiscount, calcTax, calcTotalWithoutTax } from '@/utils/calculations'

import { useCartState, useCartDispatch } from '@/context/cart'
import { removeFromCart, decreaseQuantity, increaseQuantity } from '@/actions/cart'
import { useCouponState, useCouponDispatch } from '@/context/coupon'
import { getCoupons } from '@/actions/coupon'
import { useAlertDispatch } from '@/context/alert'

const Cart = () => {
  const dispatchCart = useCartDispatch()
  const { cartItems, loading } = useCartState()
  const { coupons } = useCouponState()
  const dispatchCoupon = useCouponDispatch()
  const dispatchAlert = useAlertDispatch()

  useEffect(() => { getCoupons(dispatchCoupon) }, [dispatchCoupon])

  const [coupon, setCoupon] = useState({ initial: '', forChecking: '' })

  const couponIsValid = coupons && coupons.find(({ name }) => name === coupon.forChecking)

  return <div className="cart_container">
    {
      cartItems.length < 1
        ? <p>Cart is empty. Return to <Link href="/shop"><a style={{ color: 'var(--dodgerblue)', textDecoration: 'underline' }}>shop</a></Link>.</p>
        : <div className="cart">
            <ListItems cartItems={cartItems} dispatchCart={dispatchCart} dispatchAlert={dispatchAlert}/>
            <MobileListItems cartItems={cartItems} dispatchCart={dispatchCart} dispatchAlert={dispatchAlert}/>
            <div className="cart_summary_container">
              <div className="cart_summary">
                <SummaryItem input name="Add Coupon" value={0} coupon={coupon} setCoupon={setCoupon} couponIsValid={couponIsValid}/>
                <br />
                <SummaryItem name="Shipping" value={0}/>
                <br/>
                <SummaryItem name="Price" value={(calcTotalWithoutTax(cartItems) / 100).toFixed(2)}/>
                <SummaryItem name="Tax (20%)" value={(calcTax(cartItems) / 100).toFixed(2)}/>
                <br />
                <SummaryItem discount name="Coupon" value={couponIsValid ? couponIsValid.percent : 0}/>
                {
                  couponIsValid && <SummaryItem name="Saving" value={(calcDiscount(cartItems, couponIsValid.percent) / 100).toFixed(2)}/>
                }
                <SummaryItem total name="Total" value={couponIsValid ? (calcTotalPriceDiscount(cartItems, couponIsValid.percent) / 100).toFixed(2) : (calcTotalPrice(cartItems) / 100).toFixed(2)}/>
              </div>
              <Link href="/"><a>Checkout</a></Link>
            </div>
          </div>
    }
  </div>
}

const ListItems = ({ cartItems, dispatchCart, dispatchAlert }) => {
  return <Fragment>
    {
      cartItems.sort((a, b) => a.price - b.price).map(el => <div key={el._id} className="cart_list_item">
        <div className="cart_list_item_img">
          <img src={`/${el.image}`} alt={el.name}/>
        </div>
        <p>{el.name}</p>
        <div className="cart_list_item_action">
          <div className="cart_list_item_action_btn" onClick={() => decreaseQuantity(dispatchCart, el._id)}>-</div>
          <div className="cart_list_item_action_num">{el.quantity}</div>
          <div className="cart_list_item_action_btn" onClick={() => increaseQuantity(dispatchCart, el._id)}>+</div>
        </div>
        <i className="fas fa-trash" onClick={() => removeFromCart(dispatchCart, el._id, dispatchAlert)}/>
        <p className="cart_list_item_price">{el.price / 100}€</p>
      </div>)
    }
  </Fragment>
}

const MobileListItems = ({ cartItems, dispatchCart, dispatchAlert }) => {
  return <Fragment>
    {
      cartItems.sort((a, b) => a.price - b.price).map(el => <div key={el._id} className="mobile_cart_list_item">
        <section>
          <div className="cart_list_item_img">
            <img src={`/${el.image}`} alt={el.name}/>
          </div>
          <p>{el.name}</p>
        </section>
        <section>
          <div className="cart_list_item_action">
            <div className="cart_list_item_action_btn" onClick={() => decreaseQuantity(dispatchCart, el._id)}>-</div>
            <div className="cart_list_item_action_num">{el.quantity}</div>
            <div className="cart_list_item_action_btn" onClick={() => increaseQuantity(dispatchCart, el._id)}>+</div>
          </div>
          <i className="fas fa-trash" onClick={() => removeFromCart(dispatchCart, el._id, dispatchAlert)}/>
        </section>
        <p className="cart_list_item_price">{el.price / 100}€</p>
      </div>)
    }
  </Fragment>
}

const SummaryItem = ({ name, value, total, input, coupon, setCoupon, couponIsValid, discount }) => {
  return <div className="cart_summary_item">
    {
      total ? <strong><p>{name}</p></strong> : <p>{name}</p>
    }
    {
      total
        ? <strong><p>{value}€</p></strong>
        : input
          ? <div>
              <input value={coupon.initial} onChange={e => setCoupon({ ...coupon, initial: e.target.value })}/>
              <button disabled={couponIsValid} onClick={() => setCoupon({ ...coupon, forChecking: coupon.initial })}>
                {couponIsValid ? <i className="fas fa-check" style={{ color: 'var(--dodgerblue)' }}/> : <i className="fas fa-plus"/>}
              </button>
              <button onClick={() => setCoupon({ initial: '', forChecking: '' })} className={couponIsValid ? '' : 'hide'}><i className="fas fa-times"/></button>
            </div>
          : <p>{value}{discount ? '%' : '€'}</p>
    }
  </div>
}

export default Cart
