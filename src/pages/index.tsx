import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Kth from "../images/kthred.png"
import kthnews from "../images/kthnews.png"
import kthstockholm from "../images/stockholm.png"

import Newscard from "../components/newscard"

const KthPicture = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  clip-path: polygon(0 0, 0 90%, 100% 60%, 100% 0);
`

const News = styled.div`
  margin-top: 10%; 
  width: 100%;
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

const Button = styled(Link)`
  line-height: 45px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 8px;
  border-radius: 4px;
  height: 45px;
  font-family: 'Open sans';
`

const Button1 = styled(Button)`
  /* background: #A91717; */
  background: #750505;
  color: white;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,.4);
  width: 70%;
`

const Button2 = styled(Button)`
  color: rgba(61, 45, 45, 0.7);
  border: 1px solid rgba(61, 45, 45, 0.7);
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
        <Newscard 
          date="2019-12-11" 
          title="What's next?" 
          description="Take a sneak peak at what we’re working with.." 
          image={kthnews}
          content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quiratione voluptatem sequi nesciunt."
          ></Newscard>
    
        <Newscard 
          date="2019-10-11" 
          title="New Project Group" 
          description="The international reception has a new project group!" 
          image={kthstockholm}
          content="Here is some news"></Newscard>
    </News>

    </Aline>
    
    
  </Layout>
)

export default IndexPage
