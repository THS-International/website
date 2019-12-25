import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "archive-page" } }) {
      frontmatter {
        content
      }
    }
  }
`

const Archive: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Archive" />
      <h1>Archive</h1>
      <p>{queryResult.markdownRemark.frontmatter.content}</p>
    </Layout>
  )
}

export default Archive
