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
  background-image: url('https://images.unsplash.com/photo-1464347601390-25e2842a37f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2110&q=80');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
