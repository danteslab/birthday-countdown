import React from 'react'
import styled from 'styled-components'
import { CountdownContextProvider } from '../contexts/countdown.context'

type LayoutProps = {
  children: React.ReactChild
}

export const Layout = ({ children }: LayoutProps) => {
  return  (
    <CountdownContextProvider>
      <Container>
        {children}
      </Container>
    </CountdownContextProvider>
  )
}

const Container = styled.div`
  background: #f9fafa;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1588909741576-6ded462d06b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
