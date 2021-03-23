import { ADD_COUPON, GET_COUPONS, DELETE_COUPON, COUPON_ERROR } from '@/actions/types'

export const initialState = {
  coupons: [],
  loading: true,
  error: null
}

export const CouponReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_COUPONS:
    case DELETE_COUPON:
      return {
        ...state,
        coupons: payload,
        loading: false,
        error: null
      }
    case ADD_COUPON:
      return {
        ...state,
        coupons: payload.coupons,
        loading: false,
        error: null
      }
    case COUPON_ERROR:
      return {
        ...state,
        coupons: [],
        loading: false,
        error: payload
      }
    default:
      return state
  }
}
