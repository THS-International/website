import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import ImageLoader from "../components/ImageLoader"

const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "news" } } }) {
      edges {
        node {
          frontmatter {
            type
            title
            description
            thumbnail
            preview
          }
        }
      }
    }
  }
`

const News: React.FC = () => {
  const data = useStaticQuery(query).allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Join" />
      <h1>News</h1>

      {data.map(items => {
        const { thumbnail, title, description } = items.node.frontmatter
        return (
          <div>
            <h1>{title}</h1>
            <h4>2000-10-10</h4>
            <ImageLoader filename={thumbnail.substring(8)} />
            <p>{description}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default News
