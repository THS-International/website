import React from "react"
import Header from "./header"
import Footer from "./Footer"
import "./normalize.css"
import styled from "styled-components"

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
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
