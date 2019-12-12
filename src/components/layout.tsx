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
background-color: #750505;
height: 3rem;
padding: 1rem;
font-size: 12px;
font-weight: 600;
align-self: center;
color: rgba(255,255,255,.9);

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
        <Footer>International reception 2019</Footer>
      </div>
    </>
  )
}

export default Layout
