import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import ImageLoader from "../components/ImageLoader"
import styled from "styled-components"
import Markdown from "react-markdown"


const Title = styled.div`
  margin: 1rem 0 0 0;
  width: 100%;

  font-size: 25px;
  font-family: "Open Sans", sans-serif;
`
const Date = styled.div`
  margin: 1rem 0 0 0;
  width: 100%;

  font-size: 15px;
  font-family: "Open Sans", sans-serif;
  color: rgba(61, 45, 45, 0.6);
`
const Content = styled.div`
  margin: 1rem 0 0 0;
  width: 100%;

  font-size: 17px;
  font-family: "Roboto", sans-serif;
`
const NewsList = (props) => {
  const news = props.data.allMarkdownRemark.edges
  const { currentPage } = props.pageContext
  return (
    <Layout>
      <SEO title="News" />
      {news.map(({node}) => (
          <div key={node.id}>
            <Title>{node.frontmatter.title}</Title>
            <Date>{node.frontmatter.date}</Date>
            <ImageLoader filename={node.frontmatter.thumbnail.substring(3)} />
            <Content>
              <Markdown source={node.frontmatter.description}/>
            </Content>
            <hr />
          </div>
      ))}
    </Layout>
  )
}

export const newsQuery = graphql`
  query newsListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "news" } } }
    ) {
        edges {
            node {
              id
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

export default NewsList