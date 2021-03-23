import { ADD_ALERT, REMOVE_ALERT } from '@/actions/types'
import { nanoid } from 'nanoid'

export const setAlert = (dispatch, msg, timeout = 3000, color) => {
  const id = nanoid()

  dispatch({
    type: ADD_ALERT,
    payload: {
      msg: msg,
      id,
      color: color
    },
  })

  setTimeout(() => dispatch({
    type: REMOVE_ALERT,
    payload: id
  }), timeout)
}
