import React, { Fragment, useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useProductState } from '@/context/product'

import Toolbar from '@/toolbar'
import Preview from '@/preview'
import Loader from '@/loader'

const Shop = () => {
  const router = useRouter()

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

  const [chosenBrands, setChosenBrands] = useState([])
  const [chosenCategories, setChosenCategories] = useState([])

  const filteredItems = products && products
    .filter(el => chosenBrands.length > 0 ? chosenBrands.includes(el.brand) : el.brand)
    .filter(el => chosenCategories.length > 0 ? chosenCategories.includes(el.category) : el.category)
    .filter(el => el.name.toLowerCase().includes(router.query.search ? router.query.search.toLowerCase() : ''))

  return <Fragment>
    <Toolbar chosenBrands={chosenBrands} setChosenBrands={setChosenBrands} chosenCategories={chosenCategories} setChosenCategories={setChosenCategories}/>
    {
      router.query.search && <p className="search_query">Search results for "{router.query.search}" <i className="fas fa-times" onClick={() => router.push('/shop')}/></p>
    }
    <div className="preview_container" ref={divContainer}>
      {
        loading ? <Loader className="loader"/> : products && filteredItems.map(el => <Preview
          key={el._id}
          div={div}
          id={el._id}
          company={el.brand === 'Apple' ? 'fab fa-apple' : 'fab fa-stripe-s'}
          image={el.image}
          name={el.name}
          price={(el.price / 100).toFixed(2)}
          cartPrice={el.price}
          countInStock={el.countInStock}
        />)
      }
    </div>
    <style jsx>{`
      .preview_container {
        max-width: 2000px;
        grid-template-columns: repeat(${
          divContainerWidth <= 480
            ? 1
            : divContainerWidth <= 768
              ? 2
              : divContainerWidth <= 1024
                ? 3
                : 4
        }, 1fr);
        grid-gap: 25px;
      }

      .preview {
        height: ${divWidth - 40}px;
      }

      .search_query {
        width: calc(100% - 10vw);
        padding: 2.5vw 5vw 0 5vw;
        margin: 25px 0;
      }

      .search_query .fa-times {
        margin: 0 0 0 10px;
        color: red;
        cursor: pointer;
      }
    `}</style>
  </Fragment>
}

export default Shop
