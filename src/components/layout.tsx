import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import './normalize.css'
import styled from "styled-components"

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

const Footer = styled.footer`
background-color: red;
height: 3rem;

`

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          maxWidth: 960,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
        <Footer>Footer</Footer>
      </div>
    </>
  )
}

export default Layout
