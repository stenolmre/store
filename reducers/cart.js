import Cookies from 'js-cookie'

import { ADD_TO_CART, LOAD_CART, REMOVE_FROM_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, EMPTY_CART } from '@/actions/types'

export const initialState = {
  cartItems: []
}

export const itemsWithQuantities = (cart) => {
  return cart.reduce((acc, item) => {
    const found = acc.find(_item => _item._id === item._id)

    if (found) {
      found.quantity = found.quantity + 1
    } else {
      acc.push({
        quantity: 1,
        ...item
      })
    }

    return acc
  }, [])
}

export const CartReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case LOAD_CART:
      Cookies.get('my_order') === undefined && Cookies.set('my_order', [])

      const existingCartItems = Cookies.get('my_order') && JSON.parse(Cookies.get('my_order'))

      const countSameItems = itemsWithQuantities(existingCartItems)
      return {
        cartItems: existingCartItems.length < 1 ? existingCartItems : countSameItems
      }
    case ADD_TO_CART:
      Cookies.set('my_order', itemsWithQuantities([...state.cartItems, payload]))

      return {
        cartItems: itemsWithQuantities([...state.cartItems, payload])
      }
    case REMOVE_FROM_CART:
      const remainedItems = state.cartItems.filter(x => x._id !== payload)

      Cookies.set('my_order', remainedItems)

      return {
        cartItems: remainedItems
      }
    case DECREASE_QUANTITY:
      const filteredItems = state.cartItems.filter(x => x._id === payload)

      const otherItems = state.cartItems.filter(x => x._id !== payload)

      Cookies.set('my_order', [...otherItems, { ...filteredItems[0], quantity: filteredItems[0].quantity <= 1 ? 1 : filteredItems[0].quantity - 1}])

      return {
        cartItems: [...otherItems, { ...filteredItems[0], quantity: filteredItems[0].quantity <= 1 ? 1 : filteredItems[0].quantity - 1}]
      }
    case INCREASE_QUANTITY:
      const filteredItems1 = state.cartItems.filter(x => x._id === payload)

      const othersItems = state.cartItems.filter(x => x._id !== payload)

      Cookies.set('my_order', [...othersItems, { ...filteredItems1[0], quantity: filteredItems1[0].quantity + 1}])

      return {
        cartItems: [...othersItems, { ...filteredItems1[0], quantity: filteredItems1[0].quantity + 1}]
      }
    case EMPTY_CART:
      Cookies.remove('my_order')

      return {
        cartItems: []
      }
    default:
      return state
  }
}
