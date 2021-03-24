import React, { Fragment } from 'react'
import Head from '@/utils/head'
import url from '@/utils/url'

import Layout from '@/layout'
import ContactPage from '@/contact'

const Contact = () => {
  return <Fragment>
    <Head title="eStore - Get in touch" url={url} />
    <Layout>
      <ContactPage/>
    </Layout>
  </Fragment>
}

export default Contact
