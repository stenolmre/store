import axios from 'axios'

import { ADD_COUPON, GET_COUPONS, DELETE_COUPON, COUPON_ERROR } from '@/actions/types'

export const getCoupons = async (dispatch) => {
  try {
    const { data } = await axios.get('/api/coupon/_get')

    dispatch({
      type: GET_COUPONS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: COUPON_ERROR,
      payload: err.response
    })
  }
}

export const addCoupon = async (dispatch, data) => {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/coupon/add', body, config)

    dispatch({
      type: ADD_COUPON,
      payload: data
    })
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: COUPON_ERROR,
      payload: err.response
    })
  }
}

export const deleteCoupon = async (dispatch, couponId) => {
  try {
    const { data } = await axios.delete(`/api/coupon/delete?id=${couponId}`)

    dispatch({
      type: DELETE_COUPON,
      payload: data
    })
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: COUPON_ERROR,
      payload: err.response
    })
  }
}
