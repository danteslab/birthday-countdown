import React from 'react'
import styled from 'styled-components'

type LayoutProps = {
  children: React.ReactChild
}

export const Layout = ({ children }: LayoutProps) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  background: #f9fafa;
  height: 100vh;
`
