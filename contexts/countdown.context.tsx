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

function GlobalContextProvider({ children }: CountdownContextProviderProps) {
  const [countdownState, dispatchCountdownAction] = useReducer(countdownContextReducer, {}, countdownStateInitializer)

  const value: CountdownContextValue = {
    globalState: countdownState,
    dispatchGlobal: dispatchCountdownAction,
  }

  return (<CountDownContext.Provider value={value}>
    {children}
    </CountDownContext.Provider>
    )
}

const GlobalContextConsumer = CountDownContext.Consumer

export { CountDownContext, GlobalContextConsumer, GlobalContextProvider }