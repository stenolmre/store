import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { useProductState } from '@/context/product'

const Toolbar = ({ chosenBrands, setChosenBrands, chosenCategories, setChosenCategories }) => {
  const router = useRouter()
  const { products } = useProductState()

  const uniqueBrands = products && products.map(el => el.brand).filter((c, index) => products.map(el => el.brand).indexOf(c) === index)

  const uniqueCategories = products && products.map(el => el.category).filter((c, index) => products.map(el => el.category).indexOf(c) === index)

  const [showBrands, setShowBrands] = useState(false)
  const [showCategories, setShowCategories] = useState(false)

  const [search, setSearch] = useState('')

  const searchProduct = e => {
    e.preventDefault()
    router.push(`/shop?search=${search}`)
  }

  return <div className="toolbar">
    <div className="toolbar_filters">
      <div className="toolbar_filter" onMouseLeave={() => setShowBrands(false)}>
        <p className="toolbar_filter_title" onMouseEnter={() => setShowBrands(true)}>Brands</p>
        <div className="toolbar_filter_tags">
          {
            chosenBrands.filter((x, i, a) => a.indexOf(x) == i).map(el => <div key={el} className="toolbar_filter_tag" onClick={() => {
              const newArr = chosenBrands.filter(_el => _el !== el)
              setChosenBrands(newArr)
            }}>
              <i className="fas fa-times"/>
              <p>{el}</p>
            </div>)
          }
        </div>
        <div className="toolbar_filters_list brands_list">
          {
            uniqueBrands.map(el => <div key={el} className="toolbar_filter_tag" onClick={() => {
              setChosenBrands([...chosenBrands, el])
              setShowBrands(false)
            }}>
              <p key={el}>{el}</p>
            </div>)
          }
        </div>
      </div>
      <div className="toolbar_filter" onMouseLeave={() => setShowCategories(false)}>
        <p className="toolbar_filter_title" onMouseEnter={() => setShowCategories(true)}>Categories</p>
        <div className="toolbar_filter_tags">
          {
            chosenCategories.filter((x, i, a) => a.indexOf(x) == i).map(el => <div key={el} className="toolbar_filter_tag" onClick={() => {
              const newArr = chosenCategories.filter(_el => _el !== el)
              setChosenCategories(newArr)
            }}>
              <i className="fas fa-times"/>
              <p key={el}>{el}</p>
            </div>)
          }
        </div>
        <div className="toolbar_filters_list categories_list">
          {
            uniqueCategories.map(el => <div key={el} className="toolbar_filter_tag" onClick={() => {
              setChosenCategories([...chosenCategories, el])
              setShowCategories(false)
            }}>
              <p key={el}>{el}</p>
            </div>)
          }
        </div>
      </div>
    </div>
    <form>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search product"/>
      <button onClick={searchProduct}><i className="fas fa-search"/></button>
    </form>
    <style jsx>
      {`
        .brands_list {
          display: ${showBrands ? 'block' : 'none'};
        }

        .categories_list {
          display: ${showCategories ? 'block' : 'none'};
        }
      `}
    </style>
  </div>
}

export default Toolbar
