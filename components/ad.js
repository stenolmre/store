import React, { Fragment, useState, useRef, useEffect } from 'react'
import Link from 'next/link'

import { useProductState } from '@/context/product'

import Preview from '@/preview'
import Loader from '@/loader'

const Ad = () => {
  const { products, loading } = useProductState()

  const divContainer = useRef(null)
  const div = useRef(null)
  const [divContainerWidth, setDivContainerWitdh] = useState(1)
  const [divWidth, setDivWitdh] = useState(1)

  useEffect(() => {
    setDivContainerWitdh(divContainer.current ? divContainer.current.offsetWidth : 1)
    setDivWitdh(div.current ? div.current.offsetWidth : 1)

    const handleResize = () => {
      setDivContainerWitdh(divContainer.current ? divContainer.current.offsetWidth : 1)
      setDivWitdh(div.current ? div.current.offsetWidth : 1)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [divContainer.current])

  return <Fragment>
    <h2>Products that make your experience enjoyable.<br/><Link href="/shop"><a>Most Popular</a></Link></h2>
    <div className="ad_container" ref={divContainer}>
      {
        loading ? <Loader className="loader"/> : products && products.map(el => <Preview
          key={el._id}
          div={div}
          id={el._id}
          company={el.brand === 'Apple' ? 'fas fa-apple' : 'fas fa-stripe-s'}
          image={el.image}
          name={el.name}
          price={(el.price / 100).toFixed(2)}
          cartPrice={el.price}
          countInStock={el.countInStock}
        />).slice(0, 3)
      }
    </div>
    <p><Link href="/shop"><a>All Products</a></Link></p>
    <style jsx>{`
      h2 {
        margin: 100px 0 0 0;
        text-align: center;
      }

      h2 a {
        font-size: .875rem;
        color: var(--dodgerblue);
      }

      p {
        margin-bottom: 75px;
        text-align: center;
      }

      p a {
        font-size: .875rem;
        padding: 10px 35px;
        border-radius: 24px;
        background: #f1f5f8;
        box-shadow: 5px -5px 7px #e3e6e9, -5px 5px 7px #ffffff;
      }

      p a:hover {
        box-shadow: inset 5px 5px 7px #e3e6e9, inset -5px -5px 7px #ffffff;
        transition-duration: .4s;
      }

      .ad_container {
        width: calc(100% - 20vw);
        padding: 50px 10vw 50px 10vw;
        display: grid;
        max-width: 2000px;
        grid-template-columns: repeat(${
          divContainerWidth <= 480
            ? 1
            : divContainerWidth <= 768
              ? 2
              : divContainerWidth <= 1024
                ? 3
                : 3
        }, 1fr);
        grid-gap: 25px;
      }

      .preview {
        height: ${divWidth - 40}px;
      }

    `}</style>
  </Fragment>
}

export default Ad
