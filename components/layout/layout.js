import React, { Fragment, useState, useEffect } from 'react'
import Cookies from 'js-cookie'

import GetProducts from '@/utils/getProducts'
import LoadCart from '@/utils/loadCart'

import Navbar from '@/navbar'
import Footer from '@/footer'
import Footbar from '@/footbar'
import Alert from '@/alert'
import Consent from '@/consent'

const Layout = ({ children }) => {
  const [accepted, setAccepted] = useState(Cookies.get('eStore_consent') ? JSON.parse(Cookies.get('eStore_consent')) : false)

  console.log(accepted);

  useEffect(() => {
    !Cookies.get('eStore_consent') && Cookies.set('eStore_consent', "false", { expires: 7 })
  }, [])

  const accept = () => {
    setAccepted(true)
    Cookies.set('eStore_consent', "true", { expires: 7 })
  }

  return <GetProducts>
    <LoadCart>
      <Alert/>
      <Navbar />
      { children }
      <Footer/>
      <Footbar/>
      {
        !accepted && <Consent onClick={accept}/>
      }
    </LoadCart>
  </GetProducts>
}

export default Layout
