import React from "react"
import { Link } from "gatsby"

import Footer from "../components/Footer"
import Header from "../components/header"
import SEO from "../components/seo"
import styled from "styled-components"
import Kth from "../images/kthred.png"
import Logo from "../images/logowhite.png"
import NewsGenerator from "../components/NewsGenerator"

const KthPicture = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  clip-path: polygon(0 0, 0 90%, 100% 60%, 100% 0);

  @media screen and (min-width: 966px) {
    display: none;
  }
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

  @media screen and (min-width: 966px) {
    width: 80%;
    flex-direction: row;

    > div {
      flex: 1 0 40%;
      margin: 5%;
    }
  }
`

const PictureFrame = styled.div`
  width: 100%;
  position: relative;
  text-align: center;

  > div {
    padding: 0;
    margin: 0;
    height: 100vh;
    
    @media screen and (max-width: 966px) {
      display: none;
    }
  }

  > div > video {
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
`

const MainTitle = styled.h1`
  margin: 0;
  z-index: 2;
  position: absolute;
  top: 40%;
  left: 51%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 26px;
  font-family: "Open sans";
  font-weight: bold;
  min-width: 410px;
  width: 50%;

  @media screen and (min-width: 966px) {
    top: 70%;
    width: 10%;
    font-size: 36px;
    font-weight: 900;
    text-align: left;
  }
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
  font-family: "Open sans";

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }

  @media screen and (min-width: 966px) {
    display: none;
  }
`

const Button1 = styled(MainButton)`
  /* background: #A91717; */
  background: #750505;
  color: white;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  width: 70%;
  text-decoration: none;
`

const Button2 = styled(MainButton)`
  color: rgba(61, 45, 45, 0.7);
  border: 1px solid rgba(61, 45, 45, 0.7);
  width: 70%;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
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

  @media screen and (min-width: 966px) {
    /* display: none; */
  }
`

const DesktopLogo = styled.img`
  position: absolute;
  top: 30%;
  z-index: 4;
  height: 40vh;
  width: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 966px) {
    display: none;
  }
`

const Subtitle = styled.div`
  margin-top: 10%;
  margin-right: 10%;
  margin-left: 10%;
  text-align: center;
  font-family: "Open sans";
  font-size: 18px;
  color: rgba(61, 45, 45, 1);
`

const GetInvolved = styled(Link)`
  z-index: 2;
  position: absolute;
  left: 58%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 26px;
  font-family: "Open sans";
  font-weight: bold;

  top: 73.5%;
  font-size: 20px;
  min-width: 0;
  border-bottom: 4px solid currentColor;
  transition: padding-bottom 0.2s ease;

  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    color: white;
    padding-bottom: 5px;
    text-decoration: none;
  }

  @media screen and (max-width: 966px) {
    display: none;
  }
`

const IndexLayout = styled.main`
margin: 0 auto;
`

const IndexPage: React.FC = () => (
  <>
  <Header />
  <IndexLayout>
    <SEO title="Home" />

    <PictureFrame>
      <MainTitle>THS INTERNATIONAL RECEPTION</MainTitle>
      <GetInvolved>Get Involved</GetInvolved>
      <KthPicture src={Kth}></KthPicture>

      <DesktopLogo src={Logo}></DesktopLogo>

      <div>
        <video playsinline autoPlay muted loop>
          <source
            src="https://ths-international-reception.s3.eu-north-1.amazonaws.com/osqvik.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </PictureFrame>

    <Aline>
      <Button1 to="/">Get involved</Button1>
      <Button2 to="/">Events</Button2>

      <Subtitle>
        Be apart of KTH’s largest student reception! We are welcomming all
        international students!
      </Subtitle>

      <News>
        <NewsGenerator limit="2"></NewsGenerator>
      </News>
    </Aline>

    <Footer/>
    </IndexLayout>
  </>
)

export default IndexPage
