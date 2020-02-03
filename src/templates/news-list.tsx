import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import ImageLoader from "../components/ImageLoader"
import styled from "styled-components"
import Markdown from "react-markdown"

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "news" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
const NewsList: React.FC = () => {
  const data = useStaticQuery(query).allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="News" />
      {data.map(items => {
        const { thumbnail, title, description, date } = items.node.frontmatter
        return (
          <div>
            <Title>{title}</Title>
            <Date>{date}</Date>
            <ImageLoader filename={thumbnail.substring(3)} />
            <Content>
              <Markdown source={description}/>
            </Content>
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}

export default NewsList