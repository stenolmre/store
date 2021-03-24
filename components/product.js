import React, { useState } from 'react'

import { useCartDispatch } from '@/context/cart'
import { addToCart } from '@/actions/cart'
import { useAlertDispatch } from '@/context/alert'

const Product = ({ product }) => {
  const dispatchCart = useCartDispatch()
  const dispatchAlert = useAlertDispatch()

  const [qty, setQty] = useState(1)

  return <div className="product_container">
    <div className="product_img">
      <img src={`/${product.image}`} alt={product.name}/>
    </div>
    <div className="product_details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Brand: {product.brand}</p>
      <h3>{(product.price / 100).toFixed(2)}€</h3>

      <select onChange={e => setQty(e.target.value)}>
        {
          [...Array(product.countInStock).keys()].map(el => <option key={el} value={el + 1}>{el + 1}</option>)
        }
      </select>
      <button onClick={() => addToCart(dispatchCart, { _id: product._id, image: product.image, name: product.name, quantity: Number(qty), price: product.price, countInStock: product.countInStock }, dispatchAlert)}>Add to cart</button>
    </div>
  </div>
}

export default Product
