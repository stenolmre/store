import React, { Fragment } from 'react'
import axios from 'axios'

const url = "http://localhost:3000"

import Layout from '@/layout'
import Product from '@/product'

const Index = ({ product }) => {
  return <Fragment>
    <Layout>
      <Product product={product}/>
    </Layout>
  </Fragment>
}

Index.getInitialProps = async ctx => {
  const id = ctx.query.id

  const { data } = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    ? await axios.get(`http://localhost:3000/api/product/get?id=${id}`)
    : await axios.get(`${url}/api/adventures/get?adventureId=${id}`)

  return { product: data }
}

export default Index
