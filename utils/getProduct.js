import React, { Fragment, useEffect } from 'react'

import { useProductDispatch } from '@/context/product'
import { getProduct } from '@/actions/product'

const GetProduct = ({ children, id }) => {
  const dispatchProduct = useProductDispatch()

  useEffect(() => { getProduct(dispatchProduct, id) }, [dispatchProduct, id])

  return <Fragment>{ children }</Fragment>
}

export default GetProduct
