import React from "react"
import styled from "styled-components"
import Newscard from "../components/newscard"
import { useStaticQuery, graphql } from "gatsby"

const Title = styled.div`
  height: 5%;
  width: 100%;

  font-size: 25px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: rgba(61, 45, 45, 0.9);

  margin-left: 5%;
`

const NewsGenerator = ({ limit }) => {
  const data = useStaticQuery(graphql`
  query newsQuery {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "news"}}}) {
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
  `)
// console.log(data);

const CardGen = () => {
  let news = []
  let a = 0
  
  if(limit == "all"){
    console.log(data.allMarkdownRemark.edges.length)
    limit = data.allMarkdownRemark.edges.length
  }
  
  
  while (a < limit) {
    console.log(a);
    var str = (data.allMarkdownRemark.edges[a].node.frontmatter.thumbnail)
    var imageLink = str.substring(8);
    news.push(
      <Newscard
          //var img = require( "../../static" + data.allMarkdownRemark.edges[0].node.frontmatter.thumbnail)
          
          
          image={imageLink}
          // image ={"img"}
          date="2000-10-10"
          title={data.allMarkdownRemark.edges[a].node.frontmatter.title}
          description={data.allMarkdownRemark.edges[a].node.frontmatter.preview}
          content={data.allMarkdownRemark.edges[a].node.frontmatter.description}
        ></Newscard>
      )
      a++;
    }

    return news;
  }

  return (

    <div>
        {CardGen()}
    </div>
  )
}
export default NewsGenerator
