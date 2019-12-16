import React from "react"
import styled from "styled-components"
import { Accordion, Card, Button } from "react-bootstrap"
import FaqCard from "../components/FaqCard"
import { useStaticQuery, graphql } from "gatsby"

var bool = true

const Container = styled.div`
  margin-bottom: 1%;
  margin-top: 1%;
`
const Title = styled.div`
  height: 5%;
  width: 95%;

  font-size: 25px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: rgba(61, 45, 45, 0.9);
  margin-top: 5%;
  margin-left: 5%;
`

const FaqBox = ({ category }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              question {
                description
                title
              }
              category
            }
          }
        }
      }
    }
  `)
  function Category(cat, description, title, index) {
    if (cat == category) {
      console.log("lyckades")
      return (
        <Container>
          <Accordion defaultActiveKey={index}>
            <Card key={category}>
              <FaqCard title={title} description={description}></FaqCard>
            </Card>
          </Accordion>
        </Container>
      )
    }
  }
  let cat
  return (
    <>
      <Title key={category}>{category}</Title>
      {data.allMarkdownRemark.edges.map(
        ({ node }, index) => (
          (cat = node.frontmatter.category),
          node.frontmatter.question.map(({ description, title }, index2) =>
            Category(cat, description, title, index)
          )
        )
      )}
    </>
  )
}
export default FaqBox
