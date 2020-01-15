import styled from "styled-components"
import React from "react"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"
import THS from "../images/logowhite.png"

const FooterContent = styled.footer`
  background-color: #750505;
  height: 3rem;
  padding: 1rem 2rem 1rem 2.5rem;
  align-self: center;
`
const Copyright = styled.span`
color: rgba(255, 255, 255, 0.5);
text-align: end;
font-size: 12px;
font-weight: 600;
float: right;
`
const SocialMedia = styled.img`
height: 100%;
float: left;
margin-left: 2%;

opacity: .8;

:hover{
  opacity: 1;
}
`

const Footer: React.FC = () => {
  return <FooterContent>
    
    <a href="https://www.facebook.com/thsint/"><SocialMedia src={Facebook} ></SocialMedia> </a>
    <a href="https://www.instagram.com/ths_international_reception/?hl=sv"> <SocialMedia src={Instagram}></SocialMedia> </a>
    <a href="https://ths.kth.se/"><SocialMedia src={THS} ></SocialMedia> </a>
    <Copyright>© THS International</Copyright>
    
    </FooterContent>
}

export default Footer
