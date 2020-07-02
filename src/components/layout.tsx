import React from "react"
import Header from "./header"
import Footer from "./Footer"
import "./normalize.css"
import styled from "styled-components"
import { Content } from "react-bootstrap/lib/Tab"

const Main = styled.main`
  margin: 0 auto;
  margin-top: 10vh;
  margin-bottom: 8vh;
  max-width: 960px;
  padding-left: 20px;
  padding-right: 20px;

  /* padding-bottom: 2.5rem; */

  @media screen and (max-width: 967px) {
    margin-top: 12vh;
  }
`

const Container = styled.main`
  min-height: calc(100vh - 3rem);
`

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        <Header onIndex={false} />
        <Main>{children}</Main>
      </Container>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
