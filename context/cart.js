import React, { useReducer, createContext, useContext } from 'react'
import { CartReducer, initialState } from '@/reducers/cart'

export const CartStateCtx = createContext()
export const CartDispatchCtx = createContext()

export const useCartState = () => {
  const context = useContext(CartStateCtx)

  if (context === undefined) throw new Error('useCartState must be used within cartProvider')

  return context
}

export const useCartDispatch = () => {
  const context = useContext(CartDispatchCtx)

  if (context === undefined) throw new Error('useCartDispatch must be used within cartProvider')

  return context
}

const CartProvider = ({ children }) => {
  const [items, dispatch] = useReducer(CartReducer, initialState)

  return <CartStateCtx.Provider value={items}>
    <CartDispatchCtx.Provider value={dispatch}>
      { children }
    </CartDispatchCtx.Provider>
  </CartStateCtx.Provider>
}

export default CartProvider
