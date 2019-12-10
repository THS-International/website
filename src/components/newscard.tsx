import React from "react"
import styled from "styled-components"

const Container = styled.div`

    margin-top: 20px;
    margin-bottom: 20px;

    background-color: white;
    width: 90%;
    height: 330px;
    box-shadow: 0 2px 4px rgba(0,0,0,.4);
    display: flex;
    flex-wrap: wrap;
    
`

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
`

const ImageContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`

height: 5%;
width: 100%;

font-size: 25px;
font-family: 'Open Sans', sans-serif;
font-weight: 600;
color: rgba(61, 45, 45, 0.9);

margin-left: 5%;

`

const Date = styled.div`
height: 2%;
width: 100%;

font-size: 12px;
font-family: 'Open Sans', sans-serif;
color: rgba(61, 45, 45, 0.3);
margin-left: 5%;
`

const Description = styled.div`
height: 10%;
width: 100%;

font-size: 18px;
font-family: 'Roboto', sans-serif;
color: rgba(61, 45, 45, 0.7);
margin-left: 5%;
`

const Readmore = styled.button`

border: none;
height: 8%;
background: rgb(169,23,23,1);
color: rgba(255, 255, 255, 0.9);
width: 40%;
font-family: 'Roboto';
font-size: 13px;

margin-left: 5%;

`

const newscard = ({ image, date, title, description }) => {
    return (
        <>
            <Container>
                <ImageContainer>
                    <Image src={image}></Image>
                </ImageContainer>

                <Date>{date}</Date>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Readmore>Read More</Readmore>

            </Container>

        </>
    )
}
export default newscard
