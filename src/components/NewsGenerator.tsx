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
    query News {
      allFile {
        edges {
          node {
            name
            id
            relativePath
          }
        }
      }
    }
  `)
console.log(data);

  const CardGen = () => {
    let news = []
    let a = 0

    if(limit == "all"){
        limit = data.allFile.edges.length
    }

    while (a < limit) {
      news.push(
        <Newscard
          //image={require("../images/" + data.allFile.edges[a].node.relativePath)}
          image ="image"
          date="2000-10-10"
          title={data.allFile.edges[a].node.name}
          description={data.allFile.edges[a].node.id}
          content={data.allFile.edges[a].node.relativePath}
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
