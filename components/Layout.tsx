import React from 'react';
import styled from 'styled-components';
import { CountdownContextProvider } from '../contexts/countdown.context';
import { globalStyles } from '../styles/global.styles';

type LayoutProps = {
  children: React.ReactChild;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <CountdownContextProvider>
      <>
        <Container>{children}</Container>
        <style jsx global>
          {globalStyles}
        </style>
      </>
    </CountdownContextProvider>
  );
};

const Container = styled.div`
  background: #f9fafa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
