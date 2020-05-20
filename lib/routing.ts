import { NextRouter } from 'next/router'
import url from 'url'
import { ClockState } from '../types/clock-state.type'

function fixAsPathEncoding(asPath) {
  try {
    return url.parse(asPath, true)
  } catch (e) {
    return url.parse(encodeURI(asPath), true)
  }
}

export function getRouteState(router: NextRouter): ClockState {
  const { asPath = '' } = router
  const { query } = fixAsPathEncoding(asPath)

  const { dd, mm } = query

  return {
    dd: parseInt(dd as string),
    mm: parseInt(mm as string),
  }
}

export function updateRouteState(router: NextRouter, state = {}) {
  router.replace(
    {
      pathname: router.pathname,
    },
    {
      query: {
        ...state,
      },
    }
  )
}
