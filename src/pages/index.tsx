import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Kth from "../images/kth.png"

const KthPicture = styled.img`

  position: relative
  z-index: 2;
  width: 100%;
  clip-path: polygon(0 0, 0 90%, 100% 60%, 100% 0);


`

const Button = styled(Link)`
  line-height: 45px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 8px;
  border-radius: 4px;
  height: 45px;
  font-family: sans-serif;
`

const Button1 = styled(Button)`
  background: #A91717;
  color: white;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,.4);
  width: 70%;
`

const Button2 = styled(Button)`
  color: hsla(0, 0%, 0%, 0.8);
  color: hsla(0, 0%, 0%, 0.8);
  border: 1px solid #000;
  width: 70%;
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

const Text = styled.p`
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  color: #1C1C1C;
`

const Box = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  height: 200px;
  width: 100%;
  margin: auto;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 8px;
`

const Title2 = styled.h2`
  color: #750505;
  margin-bottom: 8px;
`

const H1 = styled.h1`
  margin-top: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: #1E1D22;
  font-size: 38px;
  line-height: 0.95;
`

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    {/* <H1>THS International Reception</H1> */}

    <KthPicture src={Kth}></KthPicture>
    <Aline>
      <Button1 to="/">Get involved</Button1>
      <Button2 to="/">Events</Button2>
    </Aline>
    <H1>News</H1>
    <Box>
      <Title2>New Project Group </Title2>
      <p>The international reception has a new project group!</p>
    </Box>
    <Box>
      <Title2>What is next?</Title2>
      <p>Take a sneak peak at what we’re working with..</p>
    </Box>
  </Layout>
)

export default IndexPage
