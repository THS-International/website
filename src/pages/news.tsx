import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Newscard from "../components/newscard"
import { useStaticQuery, graphql } from "gatsby"

const NewsBlock = styled.div`
  margin-top: 10%;
  width: 90%;
  margin: 5%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

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

      <NewsBlock>
        {data.map(items => {
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
        })}
      </NewsBlock>
    </Layout>
  )
}

export default News
