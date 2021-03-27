import axios from 'axios'
import Cookies from 'js-cookie'

import { CREATE_ORDER, UPDATE_ORDER, UPDATE_SHIPPING_ADDRESS, GET_ORDER, GET_ORDERS, DELETE_ORDER, ORDER_ERROR } from '@/actions/types'

export const getOrder = async (dispatch, id) => {
  try {
    const { data } = await axios.get(`/api/order/get?id=${id}`)

    dispatch({
      type: GET_ORDER,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: err.response
    })
  }
}

export const getOrders = async (dispatch) => {
  try {
    const { data } = await axios.get('/api/order/_get')

    dispatch({
      type: GET_ORDERS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: err.response
    })
  }
}

export const createOrder = async (dispatch, data, success) => {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/order/add', body, config)

    Cookies.set('orderId', {
      products: data.products,
      coupon: data.coupon,
      discount: data.discount
    })

    dispatch({
      type: CREATE_ORDER,
      payload: data
    })

    success()
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ORDER_ERROR,
      payload: err.response
    })
  }
}

export const updateOrder = async (dispatch, orderId, data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.put(`/api/order/update?id=${orderId}`, body, config)

    dispatch({
      type: UPDATE_ORDER,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: err.response
    })
  }
}

export const updateShippingAddress = async (dispatch, orderId, data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.put(`/api/order/updateshippingaddress?id=${orderId}`, body, config)

    dispatch({
      type: UPDATE_SHIPPING_ADDRESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: err.response
    })
  }
}

export const deleteOrder = async (dispatch, orderId) => {
  try {
    const { data } = await axios.delete(`/api/order/delete?id=${orderId}`)

    dispatch({
      type: DELETE_ORDER,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: err.response
    })
  }
}
