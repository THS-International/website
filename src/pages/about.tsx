import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import bild from "../images/kthred.png"

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "about-page" } }) {
      html
    }
  }
`

const About: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="About" />
      <h1>ABOUT</h1>
      <div dangerouslySetInnerHTML={{__html: queryResult.markdownRemark.html}} />
      <img src={require("../images/kthred.png")}></img>
    </Layout>
  )
}

export default About
