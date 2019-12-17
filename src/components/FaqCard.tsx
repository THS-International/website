import React from "react"
import styled from "styled-components"
import { Accordion, Card, Button } from "react-bootstrap"
import Markdown from "react-markdown"

const Title = styled.div`
  height: 5%;
  width: 100%;

  font-size: 25px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: rgba(61, 45, 45, 0.9);

  margin-left: 5%;
`
const Title2 = styled.div`
  height: 5%;
  width: 100%;

  font-size: 15px;
  font-family: "Roboto", sans-serif;
  color: rgba(61, 45, 45, 0.9);
`
const Description = styled.div`
  height: 10%;
  width: 100%;

  font-size: 13px;
  font-family: "Roboto", sans-serif;
  color: rgba(61, 45, 45, 0.7);
  margin-right: 5%;
`

const FaqCard = ({ title, description, index }) => {
  return (
    <>
      <Accordion.Toggle as={Card.Header} eventKey={index}>
        <Title2>{title}</Title2>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <Description>
            <Markdown source={description} />
          </Description>
        </Card.Body>
      </Accordion.Collapse>
    </>
  )
}
export default FaqCard
