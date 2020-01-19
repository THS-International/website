import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "newstudents-page" } }) {
      html
    }
  }
`

const NewsStudents: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="For new students" />
      <h1>For new students</h1>
      <div dangerouslySetInnerHTML={{__html: queryResult.markdownRemark.html}} />
    </Layout>
  )
}

export default NewsStudents
