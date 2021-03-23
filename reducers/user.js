import { LOAD_USER, GET_USERS, LOGIN, REGISTER, LOGOUT, DELETE_USER, USER_ERROR } from '@/actions/types'

export const initialState = {
  user: null,
  users: [],
  isAdmin: false,
  loading: true,
  error: null
}

export const UserReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN:
    case LOAD_USER:
      return {
        ...state,
        user: payload.user,
        isAdmin: payload.user.isAdmin,
        loading: false,
        error: null
      }
    case GET_USERS:
    case REGISTER:
    case DELETE_USER:
      return {
        ...state,
        users: payload,
        loading: false,
        error: null
      }
    case LOGOUT:
      return {
        user: null,
        isAdmin: false,
        loading: false,
        error: null
      }
    case USER_ERROR:
      return {
        ...state,
        user: null,
        isAdmin: false,
        loading: false,
        error: payload
      }
    default:
      return state
  }
}
