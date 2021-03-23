import React from 'react'
import Link from 'next/link'

import { useCartDispatch } from '@/context/cart'
import { addToCart } from '@/actions/cart'
import { useAlertDispatch, useAlertState } from '@/context/alert'

const Preview = ({ div, id, image, name, price, company, cartPrice, countInStock }) => {
  const dispatchCart = useCartDispatch()
  const dispatchAlert = useAlertDispatch()

  return <div className="preview" ref={div}>
    <div className="preview_company">
      <i className={company}/>
    </div>
    <div className="preview_img">
      <img src={image} alt="iPhone 12"/>
    </div>
    <h3>{name}</h3>
    <p>{price}€</p>
    <div className="preview_buttons">
      <i className="fas fa-plus" onClick={() => addToCart(dispatchCart, { _id: id, image: image, name: name, quantity: 1, price: cartPrice, countInStock: countInStock }, dispatchAlert)}/>
      <Link href={`/shop/${id}?name=${name.toLowerCase().replaceAll(' ', '-')}`}><a><i className="fas fa-info"/></a></Link>
    </div>
  </div>
}

export default Preview
