import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CountDownContext } from '../contexts/countdown.context';
import { getRouteState, updateRouteState } from '../lib/routing';
import { CountdownActionType } from '../reducers/countdown.reducer';
import { Clock } from './Clock';
import { Options } from './Options';

export const Countdown = () => {
  const router = useRouter();
  const { countdownState, dispatchCountdownAction } = useContext(CountDownContext);
  const interval = useRef<NodeJS.Timeout>();
  const containerTarget = useRef();

  useEffect(() => {
    console.info('Execting first time');

    const { queryState } = getRouteState(router);

    if (queryState.birthday) {
      console.info('Initializing birthday with: ', { birthday: queryState.birthday });

      dispatchCountdownAction({
        type: CountdownActionType.INITIALIZE,
        state: {
          birthday: queryState.birthday,
          backgroundUrl: queryState.backgroundUrl,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (interval.current) {
      console.info('Clearing interval due to birthday has been updated');
      clearInterval(interval.current);
    }

    interval.current = setInterval(() => {
      dispatchCountdownAction({
        type: CountdownActionType.RECALCULATE,
      });
    }, 1000);

    updateRouteState(router, {
      birthday: countdownState.birthday,
      backgroundUrl: countdownState.backgroundUrl,
    });

    return () => {
      clearInterval(interval.current);
    };
  }, [countdownState.birthday, countdownState.backgroundUrl]);

  return (
    <CounterContainer
      style={{ backgroundImage: `url("${countdownState.backgroundUrl}")` }}
      ref={containerTarget}
    >
      <Clock
        days={countdownState.days}
        hours={countdownState.hours}
        minutes={countdownState.minutes}
        seconds={countdownState.seconds}
      />
      {countdownState.routeStateLoaded && (
        <Options
          countdownState={countdownState}
          containerTarget={containerTarget}
          dispatchCountdownAction={dispatchCountdownAction}
        />
      )}
    </CounterContainer>
  );
};

const CounterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`;
