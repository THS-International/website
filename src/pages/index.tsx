import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Footer from "../components/Footer"
import Header from "../components/header"
import SEO from "../components/seo"
import styled from "styled-components"
import Logo from "../images/logowhite.png"
import NewsGenerator from "../components/NewsGenerator"
import Markdown from "react-markdown"
import ImageLoader from "../components/ImageLoader"
import PictureSlider from "../components/pictureSlider"


const TopImageStyle = styled.span`
  > div {
    position: relative;
    z-index: 1;
    width: 100%;
    clip-path: polygon(0 0, 0 90%, 100% 60%, 100% 0);

    @media screen and (min-width: 967px) {
      display: none;
    }
  }
`

const News = styled.div`
  margin-top: 10%;
  width: 90%;
  margin: 5%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;

  @media screen and (min-width: 700px) {
    width: 80%;
    flex-direction: row;

    > div {
      flex: 1 0 40%;
      margin: 5%;
      align-self: flex-start;
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

const DesktopMainTitle = styled.h1`
  margin: 0;
  z-index: 2;
  position: relative;
  color: white;
  font-size: 26px;
  font-family: "Open sans";
  font-weight: bold;
  min-width: 300px;
  width: 50%;
  min-width: 410px;
  font-size: 36px;
  font-weight: 900;
  text-align: left;
`

const MobileMainTitle = styled.h1`
  margin: 0;
  z-index: 2;
  position: absolute;
  top: 45%;
  left: 51%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 5vw;
  font-family: "Open sans";
  font-weight: bold;
  min-width: 300px;
  width: 50%;

  @media screen and (min-width: 967px) {
    display: none;
  }
`

const DesktopGetInvolved = styled(Link)`
  z-index: 2;
  position: absolute;
  color: white;
  top: 53%;
  left: 45%;
  font-size: 26px;
  font-family: "Open sans";
  font-weight: bold;
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

const DesktopTitleContainer = styled.span`
  position: absolute;
  left: 55%;
  transform: translate(-50%, -50%);
  z-index: 5;
  top: 75%;
  width: 500px;

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

  @media screen and (min-width: 967px) {
    margin-top: 15%;
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

  @media screen and (min-width: 967px) {
    display: none;
  }
`

const Button1 = styled(MainButton)`
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
`

const DesktopLogo = styled.img`
  position: absolute;
  top: 37%;
  z-index: 4;
  height: 40vh;
  width: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 966px) {
    display: none;
  }
`

const SliderBox = styled.div`
  margin-top: 5%;
  text-align: center;
  display: inline-block;
  width: 76%;
  @media screen and (max-width: 464px) {
    width: 90%;
  } 
`

const IndexLayout = styled.main`
  margin: 0 auto;
  ${SliderBox} & {
    text-align: center;
  }
`

const Content = styled.div`
max-width: 75%;
font-size: 17px;
text-align: center;
font-family: "Open sans";
font-size: 18px;
color: rgba(61, 45, 45, 1);
`

const Center = styled.div`
  text-align: center;
`

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "home-page" } }) {
      html
      frontmatter {
        subtitle
        title
        video
        action
        mobilp
      }
    }
  }
`

const IndexPage: React.FC = () => {
  const queryResult = useStaticQuery(query)
  return (
    <>
      <Header onIndex={true} />
      <IndexLayout>
        <SEO title="Home" />

        <PictureFrame>
          <DesktopTitleContainer>
            <DesktopMainTitle>
              {queryResult.markdownRemark.frontmatter.title}
            </DesktopMainTitle>
            <DesktopGetInvolved to="/join-us">
              {queryResult.markdownRemark.frontmatter.action}
            </DesktopGetInvolved>
          </DesktopTitleContainer>

          <MobileMainTitle>
            {queryResult.markdownRemark.frontmatter.title}
          </MobileMainTitle>

          <TopImageStyle>
            <ImageLoader
              filename={queryResult.markdownRemark.frontmatter.mobilp.substring(
                3
              )}
            />
          </TopImageStyle>

          <DesktopLogo src={Logo}></DesktopLogo>

          <div>
            <video playsinline autoPlay muted loop>
              <source
                src={queryResult.markdownRemark.frontmatter.video}
                type="video/mp4"
              />
            </video>
          </div>
        </PictureFrame>

        <Aline>
          <Button1 to="/join-us">Join the fun!</Button1>
          <Button2 to="/about">About Us</Button2>

          <Subtitle>
            <Markdown
              source={queryResult.markdownRemark.frontmatter.subtitle}
            />
          </Subtitle>
          <News>
            <NewsGenerator />
          </News>
          <Content
            dangerouslySetInnerHTML={{
              __html: queryResult.markdownRemark.html,
            }}
          />
        </Aline>
        <Center id="test">
          <SliderBox>
              <PictureSlider/>
          </SliderBox>
        </Center>
        <Footer />
      </IndexLayout>
    </>
  )
}

export default IndexPage
