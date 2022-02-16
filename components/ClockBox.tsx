import React from 'react';
import styled from 'styled-components';

type ClockBoxProps = {
  count: number;
  text: string;
};

export const ClockBox = ({ count, text }: ClockBoxProps) => {
  return (
    <ClockBoxContainer>
      <Count>{count}</Count>
      <Text>{text}</Text>
    </ClockBoxContainer>
  );
};

const Count = styled.p`
  color: white;
  font-size: 44px;
  margin: 0;
  font-weight: 800;
`;

const Text = styled.p`
  margin: 0;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
`;

const ClockBoxContainer = styled.div`
  background: #40404091;
  padding: 4px 24px;
  border-radius: 4px;
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
