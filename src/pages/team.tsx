import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "team-page" } }) {
      frontmatter {
        content
      }
    }
  }
`

const Team: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Team" />
      <h1>Team</h1>
      <p>{queryResult.markdownRemark.frontmatter.content}</p>
    </Layout>
  )
}

export default Team
