import React, { Fragment } from 'react'
import Head from '@/utils/head'
import url from '@/utils/url'

import Layout from '@/layout'
import Shop from '@/shop'

const Index = () => {
  return <Fragment>
    <Head title="eStore - Shop" url={`${url}/shop`} />
    <Layout>
      <Shop/>
    </Layout>
  </Fragment>
}

export default Index
