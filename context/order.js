import React, { useReducer, createContext, useContext } from 'react'
import { OrderReducer, initialState } from '@/reducers/order'

export const OrderStateCtx = createContext()
export const OrderDispatchCtx = createContext()

export const useOrderState = () => {
  const context = useContext(OrderStateCtx)

  if (context === undefined) throw new Error('useOrderState must be used within orderProvider')

  return context
}

export const useOrderDispatch = () => {
  const context = useContext(OrderDispatchCtx)

  if (context === undefined) throw new Error('useOrderDispatch must be used within orderProvider')

  return context
}

const OrderProvider = ({ children }) => {
  const [items, dispatch] = useReducer(OrderReducer, initialState)

  return <OrderStateCtx.Provider value={items}>
    <OrderDispatchCtx.Provider value={dispatch}>
      { children }
    </OrderDispatchCtx.Provider>
  </OrderStateCtx.Provider>
}

export default OrderProvider
