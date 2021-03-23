import React, { useReducer, createContext, useContext } from 'react'
import { AlertReducer, initialState } from '@/reducers/alert'

export const AlertStateCtx = createContext()
export const AlertDispatchCtx = createContext()

export const useAlertState = () => {
  const context = useContext(AlertStateCtx)

  if (context === undefined) throw new Error('useAlertState must be used within alertProvider')

  return context
}

export const useAlertDispatch = () => {
  const context = useContext(AlertDispatchCtx)

  if (context === undefined) throw new Error('useAlertDispatch must be used within alertProvider')

  return context
}

const AlertProvider = ({ children }) => {
  const [items, dispatch] = useReducer(AlertReducer, initialState)

  return <AlertStateCtx.Provider value={items}>
    <AlertDispatchCtx.Provider value={dispatch}>
      { children }
    </AlertDispatchCtx.Provider>
  </AlertStateCtx.Provider>
}

export default AlertProvider
