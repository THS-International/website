import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import LycaGIF from "../images/lyca.gif"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "partners-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const Img = styled.img`
  width: 100%;
`

const Partners: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Partners" />
      <h1>{queryResult.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: queryResult.markdownRemark.html}} />
      <Img src={LycaGIF} alt="LycaMobile GIF"></Img>
    </Layout>
  )
}

export default Partners
