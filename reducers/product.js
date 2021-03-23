import { ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, PRODUCT_ERROR } from '@/actions/types'

export const initialState = {
  product: null,
  products: [],
  loading: true,
  error: null
}

export const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_PRODUCTS:
    case DELETE_PRODUCT:
      return {
        ...state,
        products: payload,
        loading: false,
        error: null
      }
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false,
        error: null
      }
    case ADD_PRODUCT:
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: payload.products,
        product: payload.product,
        loading: false,
        error: null
      }
    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    default:
      return state
  }
}
