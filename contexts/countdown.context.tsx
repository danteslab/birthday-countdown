import React, { useReducer } from 'react'
import { CountdownAction, countdownContextReducer, CountdownState, countdownStateInitializer } from '../reducers/countdown.reducer'

type CountdownContextValue = {
  globalState: CountdownState
  dispatchGlobal: React.Dispatch<CountdownAction>
}

type CountdownContextProviderProps = {
  children: React.ElementRef<any>
}

const CountDownContext = React.createContext(undefined)

function CountdownContextProvider({ children }: CountdownContextProviderProps) {
  const [countdownState, dispatchCountdownAction] = useReducer(countdownContextReducer, undefined, countdownStateInitializer)

  const value: CountdownContextValue = {
    globalState: countdownState,
    dispatchGlobal: dispatchCountdownAction,
  }

  return (
    <CountDownContext.Provider value={value}>
      {children}
    </CountDownContext.Provider>
  )
}

export { CountDownContext, CountdownContextProvider }