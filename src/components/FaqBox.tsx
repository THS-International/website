import React from "react"
import styled from "styled-components"
import { Accordion, Card, Button } from "react-bootstrap"
import FaqCard from "../components/FaqCard"
import { useStaticQuery, graphql } from "gatsby"

var bool = true;

const Title = styled.div`
  height: 5%;
  width: 100%;

  font-size: 25px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: rgba(61, 45, 45, 0.9);

  margin-left: 5%;
`

const FaqBox = ({category}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
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
  console.log(data)
  function Category(cat, id, index){
    if(cat == category){
      console.log("lyckades")
      return (
        <Accordion defaultActiveKey={index}>
            <Card key={category}>
              <FaqCard title={cat} description={id}></FaqCard>
            </Card>
          </Accordion>
      )
    }
  }
    return (
      <>
        <Title key={category}>{category}</Title>
        {data.allFile.edges.map(({ node }, index) => (
          Category(node.name, node.id, index)   
        ))}
      </>
    )
}
export default FaqBox
