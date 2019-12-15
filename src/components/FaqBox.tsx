import React from "react"
import styled from "styled-components"
import { Accordion, Card, Button } from "react-bootstrap"
import FaqCard from "../components/FaqCard"
import { useStaticQuery, graphql } from "gatsby"

var bool = true;

const Title = styled.div`
  height: 5%;
  width: 95%;

  font-size: 25px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: rgba(61, 45, 45, 0.9);

  margin-left: 5%;
`

const FaqBox = ({category}) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            category
            description
            title
          }
        }
      }
    }
  }
  `)
  console.log(data.allMarkdownRemark.edges)
  function Category(cat, description, title, index){
    if(cat == category){
      console.log("lyckades")
      return (
        <Accordion defaultActiveKey={index}>
            <Card key={category}>
              <FaqCard title={title} description={description}></FaqCard>
            </Card>
          </Accordion>
      )
    }
  }
    return (
      <>
        <Title key={category}>{category}</Title>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          Category(node.frontmatter.category, node.frontmatter.description, node.frontmatter.title, index)   
        ))}
      </>
    )
}
export default FaqBox
