import React from 'react';
import styled from 'styled-components';
import { ClockBox } from './ClockBox';

interface ClockProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Clock = ({ days, hours, minutes, seconds }: ClockProps) => {
  return (
    <ClockContainer>
      <ClockBox count={days} text="Days" />
      <ClockBox count={hours} text="Hours" />
      <ClockBox count={minutes} text="Minutes" />
      <ClockBox count={seconds} text="Seconds" />
    </ClockContainer>
  );
};

const ClockContainer = styled.div`
  display: flex;
`;
