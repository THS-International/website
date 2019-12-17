import React from "react"
import Header from "./header"
import "./normalize.css"
import styled from "styled-components"

const Footer = styled.footer`
  background-color: #750505;
  height: 3rem;
  padding: 1rem;
  font-size: 12px;
  font-weight: 600;
  align-self: center;
  color: rgba(255, 255, 255, 0.9);
`

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
`

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer>International reception 2019</Footer>
    </>
  )
}

export default Layout
