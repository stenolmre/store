import React, { Fragment } from 'react'

import GetProducts from '@/utils/getProducts'
import LoadCart from '@/utils/loadCart'

import Navbar from '@/navbar'
import Footer from '@/footer'
import Footbar from '@/footbar'
import Alert from '@/alert'

const Layout = ({ children }) => {
  return <GetProducts>
    <LoadCart>
      <Alert/>
      <Navbar />
      { children }
      <Footer/>
      <Footbar/>
    </LoadCart>
  </GetProducts>
}

export default Layout
