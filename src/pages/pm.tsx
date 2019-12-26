import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "pm-page" } }) {
      html
    }
  }
`

const Pm: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Project Manager" />
      <h1>Project Manager</h1>
      <div dangerouslySetInnerHTML={{__html: queryResult.markdownRemark.html}} />
    </Layout>
  )
}

export default Pm
