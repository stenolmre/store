import { CREATE_ORDER, UPDATE_ORDER, UPDATE_SHIPPING_ADDRESS, GET_ORDER, GET_ORDERS, DELETE_ORDER, ORDER_ERROR } from '@/actions/types'

export const initialState = {
  order: null,
  orders: [],
  loading: true,
  error: null
}

export const OrderReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_ORDER:
    case UPDATE_ORDER:
    case UPDATE_SHIPPING_ADDRESS:
    case GET_ORDER:
      return {
        ...state,
        order: payload,
        loading: false,
        error: null
      }
    case GET_ORDERS:
    case DELETE_ORDER:
      return {
        ...state,
        orders: payload,
        loading: false,
        error: null
      }
    case ORDER_ERROR:
      return {
        ...state,
        order: null,
        loading: false,
        error: payload
      }
    default:
      return state
  }
}
