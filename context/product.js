import React, { useReducer, createContext, useContext } from 'react'
import { ProductReducer, initialState } from '@/reducers/product'

export const ProductStateCtx = createContext()
export const ProductDispatchCtx = createContext()

export const useProductState = () => {
  const context = useContext(ProductStateCtx)

  if (context === undefined) throw new Error('useProductState must be used within ProductProvider')

  return context
}

export const useProductDispatch = () => {
  const context = useContext(ProductDispatchCtx)

  if (context === undefined) throw new Error('useProductDispatch must be used within ProductProvider')

  return context
}

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(ProductReducer, initialState)

  return <ProductStateCtx.Provider value={products}>
    <ProductDispatchCtx.Provider value={dispatch}>
      { children }
    </ProductDispatchCtx.Provider>
  </ProductStateCtx.Provider>
}

export default ProductProvider
