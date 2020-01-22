import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "join-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const Join: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Join Us" />
      <h1>{queryResult.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: queryResult.markdownRemark.html}} />
    </Layout>
  )
}

export default Join
