import React from "react"
import Header from "./header"
import Footer from "./Footer"
import "./normalize.css"
import styled from "styled-components"

const Main = styled.main`
  margin: 0 auto;
  margin-top: 5%;
  max-width: 960px;
  padding: 5%;

  @media screen and (max-width: 967px){
    margin-top: 10%;
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
