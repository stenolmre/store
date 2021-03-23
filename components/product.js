import React, { useState } from 'react'

const Product = ({ product }) => {
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
      <button>Add to cart</button>
    </div>
  </div>
}

export default Product
