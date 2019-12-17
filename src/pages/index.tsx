import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Kth from "../images/kthred.png"
import NewsGenerator from "../components/NewsGenerator"

const KthPicture = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  clip-path: polygon(0 0, 0 90%, 100% 60%, 100% 0);
`

const News = styled.div`
  margin-top: 10%; 
  width: 90%;
  margin: 5%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const PictureFrame = styled.div`
  position: relative;
  text-align: center;
`

const MainTitle = styled.div`
  z-index: 2;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 36px;
  font-family: 'Open sans';
  font-weight: bold;
`

const MainButton = styled(Link)`
  line-height: 45px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 8px;
  border-radius: 4px;
  height: 45px;
  font-family: 'Open sans';

  &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const Button1 = styled(MainButton)`
  /* background: #A91717; */
  background: #750505;
  color: white;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,.4);
  width: 70%;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: white;
    }
`

const Button2 = styled(MainButton)`
  color: rgba(61, 45, 45, 0.7);
  border: 1px solid rgba(61, 45, 45, 0.7);
  width: 70%;
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: rgba(61, 45, 45, 0.7);
    }
  
`

const Aline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-right: 25%;
  margin-top: -70px;
  z-index: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Subtitle = styled.div`
margin-top: 10%;
margin-right: 10%;
margin-left: 10%;
text-align: center;
font-family: 'Open sans';
font-size: 18px;
color: rgba(61, 45, 45, 1);
`



const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />

    <PictureFrame>
      <MainTitle>We are the international reception</MainTitle>
      <KthPicture src={Kth}></KthPicture>
    </PictureFrame>
    <Aline>
      <Button1 to="/">Get involved</Button1>
      <Button2 to="/">Events</Button2>

        <Subtitle>
        Be apart of KTH’s largest student reception!
        We are welcomming all international students!
        </Subtitle>

    <News>
        <NewsGenerator limit="2"></NewsGenerator>
    </News>

    </Aline>
    
    
  </Layout>
)

export default IndexPage
