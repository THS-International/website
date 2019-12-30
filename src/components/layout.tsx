import React from "react"
import Header from "./header"
import Footer from "./Footer"
import "./normalize.css"
import styled from "styled-components"

const Main = styled.main`
  margin: 0 auto;
  margin-top: 8vh;
  max-width: 960px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 967px){
    margin-top: 8vh;
  }
`

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
