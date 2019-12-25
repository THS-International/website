import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "archive-page" } }) {
      frontmatter {
        content
      }
    }
  }
`


const Buddies: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (<Layout>
    <SEO title="Buddies" />
    <h1>Buddies</h1>
    <p>{queryResult.markdownRemark.frontmatter.content}</p>
  </Layout>)
}

export default Buddies
