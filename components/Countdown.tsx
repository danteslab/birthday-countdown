import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { CountDownContext } from '../contexts/countdown.context'
import { getRouteState } from '../lib/routing'
import { CountdownActionType } from '../reducers/countdown.reducer'
import { Clock } from './Clock'

export const Countdown = () => {
  const router = useRouter()

  const { countdownState, dispatchCountdownAction  } = useContext(CountDownContext)

  useEffect(() => {
    console.info('Execting first time')

    const { queryState } = getRouteState(router);

    if(queryState.birthday) {
      console.info('Initializing birthday with: ', { birthday: queryState.birthday })

      dispatchCountdownAction({
        type: CountdownActionType.UPDATE_DATE,
        payload: { birthday: queryState.birthday }
      })
    }

  }, [])


  return (
    <CounterContainer>
      <Clock 
        days={countdownState.days}
        hours={countdownState.hours}
        minutes={countdownState.minutes}
        seconds={countdownState.seconds}
        />
    </CounterContainer>
  )
}

const CounterContainer = styled.div``
