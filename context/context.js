import React from 'react'

import CartProvider from './cart'
import ProductProvider from './product'
import OrderProvider from './order'
import UserProvider from './user'
import CouponProvider from './coupon'
import AlertProvider from './alert'

const GlobalState = ({ children }) => <ProductProvider>
  <CartProvider>
    <UserProvider>
      <OrderProvider>
        <CouponProvider>
          <AlertProvider>
            { children }
          </AlertProvider>
        </CouponProvider>
      </OrderProvider>
    </UserProvider>
  </CartProvider>
</ProductProvider>

export default GlobalState
