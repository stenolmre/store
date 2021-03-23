import React, { Fragment, useEffect } from 'react'

import { useProductDispatch } from '@/context/product'
import { getProducts } from '@/actions/product'

const GetProducts = ({ children }) => {
  const dispatchProduct = useProductDispatch()

  useEffect(() => { getProducts(dispatchProduct) }, [dispatchProduct])

  return <Fragment>{ children }</Fragment>
}

export default GetProducts
