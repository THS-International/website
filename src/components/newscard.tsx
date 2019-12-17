import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import ImageLoader from "../components/ImageLoader"

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-wrap: wrap;
`

const Image = styled(ImageLoader)`
  max-width: 100%;
  max-height: 100%;
  display: block;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  /* display: flex; */
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  width: 100%;

  font-size: 25px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: rgba(61, 45, 45, 0.9);

  margin-left: 5%;
`

const Date = styled.div`
  margin: 1rem 0 0 0;
  width: 100%;

  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  color: rgba(61, 45, 45, 0.3);
  margin-left: 5%;
`

const Description = styled.div`
  margin: .5rem 0 0 0;
  width: 90%;

  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: rgba(61, 45, 45, 0.7);
  margin-left: 5%;
`

const Readmore = styled.button`
  border: none;
  height: 1.7rem;
  background: #750505;
  color: rgba(255, 255, 255, 0.9);
  width: 40%;
  font-family: "Roboto";
  font-size: 13px;
  margin: .5rem 0 1rem 5%;
  border-radius: 4px;
  text-decoration: none;
`

// const Content = styled.div`
//   display: ${({ display }: { display: boolean }) =>
//   display ? "inline" : "none"};
//   position: relative;
// `

const newscard = ({ image, date, title, description, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <ImageContainer>
        <Image filename={image}></Image>
      </ImageContainer>

      <Date>{date}</Date>
      <Title>{title}</Title>
      <Description>{isOpen ? content : description}</Description>
      <Readmore onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? "Read more" : "See less"}
      </Readmore>
     
    </Container>
  )
}
export default newscard
