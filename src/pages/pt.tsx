import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "pt-page" } }) {
      html
    }
  }
`

const Pt: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Project team" />
      <h1>Project Team</h1>
      <div dangerouslySetInnerHTML={{__html: queryResult.markdownRemark.html}} />
    </Layout>
  )
}

export default Pt
