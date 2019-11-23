import React from "react"
import Hamburger from "./hamburger"
import styled from "styled-components"
import Logo from "../images/logored.png"

const HeaderBox = styled.header`
  padding: 15px 15px;
  display: flex;
  justify-content: space-between;
`

const LogoComp = styled.img`
  height: 40px;
  width: 40px;
`

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <HeaderBox>
    <LogoComp src={Logo}></LogoComp>
    <Hamburger />
  </HeaderBox>
)

export default Header
