import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "partners-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

const Partners: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Partners" />
      <h1>{queryResult.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: queryResult.markdownRemark.html}} />
      <img src="https://irpublic.blob.core.windows.net/thsint-se/LM_SE_KTH-GIF_1583x613px_Aug_23.gif" alt="Lyca GIF" />
    </Layout>
  )
}

export default Partners
