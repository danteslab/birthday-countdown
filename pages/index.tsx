import React, { useEffect, useState } from 'react'
import { Counter } from '../components/Counter'
import { useRouter } from 'next/router'
import { getRouteState } from '../lib/routing'
import { ClockState } from '../types/clock-state.type'

const Index = () => {
  const router = useRouter()
  const [clockState, setClockState] = useState<ClockState>(getRouteState(router))

  return <Counter />
}

export default Index
