import React, { useReducer, createContext, useContext } from 'react'
import { UserReducer, initialState } from '@/reducers/user'

export const UserStateCtx = createContext()
export const UserDispatchCtx = createContext()

export const useUserState = () => {
  const context = useContext(UserStateCtx)

  if (context === undefined) throw new Error('useUserState must be used within userProvider')

  return context
}

export const useUserDispatch = () => {
  const context = useContext(UserDispatchCtx)

  if (context === undefined) throw new Error('useUserDispatch must be used within userProvider')

  return context
}

const UserProvider = ({ children }) => {
  const [users, dispatch] = useReducer(UserReducer, initialState)

  return <UserStateCtx.Provider value={users}>
    <UserDispatchCtx.Provider value={dispatch}>
      { children }
    </UserDispatchCtx.Provider>
  </UserStateCtx.Provider>
}

export default UserProvider
