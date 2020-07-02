import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "aboutTHS-page" } }) {
      html
    }
  }
`

const AboutTHS: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="AboutTHS" />
      <h1>About THS</h1>
      <div
        dangerouslySetInnerHTML={{ __html: queryResult.markdownRemark.html }}
      />
    </Layout>
  )
}

export default AboutTHS
