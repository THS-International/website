import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "maps-page" } }) {
      html
    }
  }
`

const Maps: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="About" />
      <h1>MAPS</h1>
      <div
        dangerouslySetInnerHTML={{ __html: queryResult.markdownRemark.html }}
      />
    </Layout>
  )
}

export default Maps
