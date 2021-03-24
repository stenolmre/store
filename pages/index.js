import React, { Fragment } from 'react'
import Head from '@/utils/head'
import url from '@/utils/url'

import Layout from '@/layout'
import Landing from '@/landing'
import Ad from '@/ad'

const Index = () => {
  return <Fragment>
    <Head title="eStore - Quality Products" url={url} />
    <Layout>
      <Landing />
      <Ad />
    </Layout>
  </Fragment>
}

export default Index
