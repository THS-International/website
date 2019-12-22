import React from "react"
import Newscard from "../components/newscard"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "news" } } }
      limit: 2
    ) {
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

const NewsGenerator = () => {
  const data = useStaticQuery(query)

  return data.allMarkdownRemark.edges.map(items => {
    const node = items.node
    const imageLink = node.frontmatter.thumbnail.substring(8)
    return (
      <Newscard
        image={imageLink}
        date="2000-10-10"
        title={node.frontmatter.title}
        description={node.frontmatter.preview}
        content={node.frontmatter.description}
      />
    )
  })
}
export default NewsGenerator
