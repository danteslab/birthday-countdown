import React from 'react'
import styled from 'styled-components'
import { CountdownContextProvider } from '../contexts/countdown.context'
import { globalStyles } from '../styles/global.styles'

type LayoutProps = {
  children: React.ReactChild
}

export const Layout = ({ children }: LayoutProps) => {
  return  (

    <CountdownContextProvider>
      <>
        <Container>
          {children}
        </Container>
        <style jsx global>
          {globalStyles}
        </style>
      </>
    </CountdownContextProvider>
  )
}

const Container = styled.div`
  background: #f9fafa;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1644577524390-acb708587c7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2382&q=80');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
