import { ADD_TO_CART, LOAD_CART, REMOVE_FROM_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, EMPTY_CART } from '@/actions/types'
import { setAlert } from '@/actions/alert'

export const addToCart = (dispatch, data, alert) => {
  dispatch({
    type: ADD_TO_CART,
    payload: data
  })

  setAlert(alert, 'Item is added to the cart.', 3000, '#00B74A')
}

export const loadCart = (dispatch) => {
  dispatch({
    type: LOAD_CART
  })
}

export const emptyCart = (dispatch) => {
  dispatch({
    type: EMPTY_CART
  })
}

export const removeFromCart = (dispatch, data, alert) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: data
  })

  setAlert(alert, 'Item is removed from the cart.', 3000, '#F93154')
}

export const decreaseQuantity = (dispatch, data) => {
  dispatch({
    type: DECREASE_QUANTITY,
    payload: data
  })
}

export const increaseQuantity = (dispatch, data) => {
  dispatch({
    type: INCREASE_QUANTITY,
    payload: data
  })
}
