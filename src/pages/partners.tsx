import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "partners-page" } }) {
      html
    }
  }
`

const Partners: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Partners" />
      <h1>Partners</h1>
      <div dangerouslySetInnerHTML={{__html: queryResult.markdownRemark.html}} />
    </Layout>
  )
}

export default Partners
