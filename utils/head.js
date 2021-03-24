import React from 'react'
import Head from 'next/head'

export default function MetaTags({ title, description, image, url }) {
  return <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
    <meta name="description" content={description ? description : 'Experience the world through screen as you are travelling to your favorite place. Quality products from eStore.'}/>
    <meta name="image" content={image ? image : 'https://res.cloudinary.com/djz69vbsq/image/upload/v1616594582/Demo_eStore/eStore_preview_izdotx.png'}/>
    <meta name="keywords" content="Software, Developer, Web, Website"/>
    <link rel="shortcut icon" type="image/x-icon" href="icon.png" />
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={description ? description : 'Experience the world through screen as you are travelling to your favorite place. Quality products from eStore.'}/>
    <meta property="og:image" content={image ? image : 'https://res.cloudinary.com/djz69vbsq/image/upload/v1616594582/Demo_eStore/eStore_preview_izdotx.png'}/>
    <meta property="og:url" content={url}/>
    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={description ? description : 'Experience the world through screen as you are travelling to your favorite place. Quality products from eStore.'}/>
    <meta name="twitter:image" content={image ? image : 'https://res.cloudinary.com/djz69vbsq/image/upload/v1616594582/Demo_eStore/eStore_preview_izdotx.png'}/>
    <meta name="twitter:card" content="summary_large_image"/>
  </Head>
}
