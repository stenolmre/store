import React, { Fragment } from 'react'
import Head from '@/utils/head'
import url from '@/utils/url'

import Layout from '@/layout'
import Cart from '@/cart'

const Index = () => {
  return <Fragment>
    <Head title="eStore - Cart" url={url} />
    <Layout>
      <Cart/>
    </Layout>
  </Fragment>
}

export default Index
