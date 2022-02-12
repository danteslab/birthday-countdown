import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { CountDownContext } from '../contexts/countdown.context'
import { getRouteState } from '../lib/routing'
import { Clock } from './Clock'

export const Countdown = () => {
  const router = useRouter()

  const { countdownState, dispatchCountdownAction  } = useContext(CountDownContext)



  useEffect(() => {
    console.log('Execting first time')

    const { queryState } = getRouteState(router);

    

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
