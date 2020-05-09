import React from 'react'
import styled from 'styled-components'
import { ClockBox } from './ClockBox'

export const Clock = () => {
  return (
    <ClockContainer>
      <ClockBox count={'149'} text="Days" />
      <ClockBox count={'14'} text="Hours" />
      <ClockBox count={'34'} text="Minutes" />
      <ClockBox count={'58'} text="Seconds" />
    </ClockContainer>
  )
}

const ClockContainer = styled.div`
  display: flex;
`
