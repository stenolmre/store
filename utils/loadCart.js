import React, { Fragment, useEffect } from 'react'

import { useCartDispatch } from '@/context/cart'
import { loadCart } from '@/actions/cart'

const LoadCart = ({ children }) => {
  const dispatchCart = useCartDispatch()
  
  useEffect(() => { loadCart(dispatchCart) }, [dispatchCart])

  return <Fragment>{ children }</Fragment>
}

export default LoadCart
