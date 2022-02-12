import React, { useReducer } from 'react'
import { CountdownAction, countdownContextReducer, CountdownState, countdownStateInitializer } from '../reducers/countdown.reducer'

type CountdownContextValue = {
  countdownState: CountdownState
  dispatchCountdownAction: React.Dispatch<CountdownAction>
}

type CountdownContextProviderProps = {
  children: React.ElementRef<any>
}

const CountDownContext = React.createContext<CountdownContextValue>(undefined)

function CountdownContextProvider({ children }: CountdownContextProviderProps) {
  const [countdownState, dispatchCountdownAction] = useReducer(countdownContextReducer, undefined, countdownStateInitializer)

  const value: CountdownContextValue = {
    countdownState,
    dispatchCountdownAction,
  }

  return (
    <CountDownContext.Provider value={value}>
      {children}
    </CountDownContext.Provider>
  )
}

export { CountDownContext, CountdownContextProvider }