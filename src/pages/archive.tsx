import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "archive-page" } }) {
      html
    }
  }
`

const Archive: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Archive" />
      <h1>Archive</h1>
      <div dangerouslySetInnerHTML={{__html: queryResult.markdownRemark.html}} />
    </Layout>
  )
}

export default Archive
