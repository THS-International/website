import React from "react"
import { Accordion, Card } from "react-bootstrap"
import FaqCard from "./FaqCard"
import styled from "styled-components"

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

const FaqBox: React.FC<any> = ({ category: { category, questions } }) => {
  return (
    <>
      <Title>{category}</Title>
      <Container>
        <Accordion>
          <Card>
            {questions.map(({ title, description }, index) => (
              <FaqCard title={title} description={description} index={index} />
            ))}
          </Card>
        </Accordion>
      </Container>
    </>
  )
}

export default FaqBox
