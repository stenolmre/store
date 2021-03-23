import axios from 'axios'
import Cookies from 'js-cookie'

import { LOAD_USER, GET_USERS, LOGIN, REGISTER, LOGOUT, DELETE_USER, USER_ERROR } from '@/actions/types'
import setAuthToken from '@/utils/setAuthToken'

export async function loadUser(dispatch, token) {
  setAuthToken(token)

  try {
    const { data } = await axios.get('/api/user/get')

    dispatch({
      type: LOAD_USER,
      payload: data
    })

  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response
    })
  }
}

export async function login(dispatch, data, success) {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/user/login', body, config)

    dispatch({
      type: LOGIN,
      payload: data
    })

    Cookies.set('user_token', data.token)

    if (data.status === 'success') {
      success()
    }
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response
    })
  }
}

export async function register(dispatch, data) {
  const config = { headers: { 'Content-Type': 'application/json' } }

  const body = JSON.stringify(data)

  try {
    const { data } = await axios.post('/api/user/register', body, config)

    dispatch({
      type: REGISTER,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response
    })
  }
}

export async function logout(dispatch, redirect) {
  Cookies.remove('user_token')

  dispatch({
    type: LOGOUT
  })

  redirect()
}

export async function getUsers(dispatch) {
  try {
    const { data } = await axios.get('/api/user/_get')

    dispatch({
      type: GET_USERS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response
    })
  }
}

export async function deleteUser(dispatch, id) {
  try {
    const { data } = await axios.delete(`/api/user/delete?id=${id}`)

    dispatch({
      type: DELETE_USER,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response
    })
  }
}
