import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "about-page" } }) {
      frontmatter {
        content
      }
    }
  }
`

const Vision: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Vision" />
      <h1>Vision</h1>
      <p>{queryResult.markdownRemark.frontmatter.content}</p>
    </Layout>
  )
}

export default Vision
