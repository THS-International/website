import styled from "styled-components"
import React from "react"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"
import THS from "../images/ths.png"

const FooterContent = styled.footer`
  display: flex;
  background-color: #750505;
  height: 3rem;
  padding: 0rem 1.5rem 0rem 1rem;
  align-items: center;
`
const Copyright = styled.span`
margin-left: auto;
color: rgba(255, 255, 255, 0.5);
text-align: end;
font-size: 12px;
font-weight: 600;
`
const SocialMedia = styled.img`
height: 25px;
margin-left: 2vw;

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
    <Copyright>© THS International 2020</Copyright>
    
    </FooterContent>
}

export default Footer
