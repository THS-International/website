import React from "react"
import NewsCard from "../components/newscard"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "news" } } }
      limit: 2
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            type
            title
            description
            thumbnail
            preview
            date
          }
        }
      }
    }
  }
`

const NewsGenerator = () => {
  const data = useStaticQuery(query)

  return data.allMarkdownRemark.edges.map(items => {
    const {
      thumbnail,
      title,
      preview,
      description,
      date,
    } = items.node.frontmatter
    return (
      <NewsCard
        image={thumbnail.substring(8)}
        date={date}
        title={title}
        description={preview}
        content={description}
      />
    )
  })
}
export default NewsGenerator
