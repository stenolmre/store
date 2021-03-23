import axios from 'axios'

import { ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, PRODUCT_ERROR } from '@/actions/types'

export const getProducts = async (dispatch) => {
  try {
    const { data } = await axios.get('/api/product/_get')

    dispatch({
      type: GET_PRODUCTS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err
    })
  }
}

export const getProduct = async (dispatch, id) => {
  try {
    const { data } = await axios.get(`/api/product/get?id=${id}`)

    dispatch({
      type: GET_PRODUCT,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err
    })
  }
}

export const addProduct = async (dispatch, data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/product/add', body, config)

    dispatch({
      type: ADD_PRODUCT,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err.response
    })
  }
}

export const updateProduct = async (dispatch, id, data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.put(`/api/product/update?id=${id}`, body, config)

    dispatch({
      type: UPDATE_PRODUCT,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err.response.data
    })

    console.log(err.response.data);
  }
}

export const deleteProduct = async (dispatch, id) => {
  try {
    const { data } = await axios.delete(`/api/product/delete?id=${id}`)

    dispatch({
      type: DELETE_PRODUCT,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err
    })
  }
}
