import React, { Fragment } from 'react'
import Head from '@/utils/head'
import url from '@/utils/url'

import Layout from '@/layout'
import Checkout from '@/checkout'

const Index = () => {
  return <Fragment>
    <Head title="eStore - Cart" url={`${url}/checkout`} />
    <Layout>
      <Checkout />
    </Layout>
  </Fragment>
}

export default Index
