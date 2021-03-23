import React, { useReducer, createContext, useContext } from 'react'
import { CouponReducer, initialState } from '@/reducers/coupon'

export const CouponStateCtx = createContext()
export const CouponDispatchCtx = createContext()

export const useCouponState = () => {
  const context = useContext(CouponStateCtx)

  if (context === undefined) throw new Error('useCouponState must be used within couponProvider')

  return context
}

export const useCouponDispatch = () => {
  const context = useContext(CouponDispatchCtx)

  if (context === undefined) throw new Error('useCouponDispatch must be used within couponProvider')

  return context
}

const CouponProvider = ({ children }) => {
  const [items, dispatch] = useReducer(CouponReducer, initialState)

  return <CouponStateCtx.Provider value={items}>
    <CouponDispatchCtx.Provider value={dispatch}>
      { children }
    </CouponDispatchCtx.Provider>
  </CouponStateCtx.Provider>
}

export default CouponProvider
