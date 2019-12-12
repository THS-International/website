import React from "react"
import styled from "styled-components"
import { Accordion, Card, Button } from "react-bootstrap"


const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  background-color: white;
  width: 90%;
  height: 330px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-wrap: wrap;
`
const Title = styled.div`
  height: 5%;
  width: 100%;

  font-size: 25px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: rgba(61, 45, 45, 0.9);

  margin-left: 5%;
`
const Description = styled.div`
  height: 10%;
  width: 100%;

  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: rgba(61, 45, 45, 0.7);
  margin-left: 5%;
`

const FaqCard = ({ title, description}) => {
  return (
      <>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Title>{title}</Title>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Description>{description}</Description>
          </Card.Body>
        </Accordion.Collapse>
    </>
  )
}
export default FaqCard
