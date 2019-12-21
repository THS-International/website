import React, { useState } from "react"
import Hamburger from "./hamburger"
import styled from "styled-components"
//@ts-ignore
import LogoRed from "../images/logored.png"
//@ts-ignore
import LogoWhite from "../images/logowhite.png"
import Drawer from "./drawer"
import DesktopMenu from "./DesktopMenu"

const HeaderBoxMobile = styled.header`
  padding: 15px 15px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 992px){
    display: none;
  }
`
const HeaderBoxDesktop = styled.header`
width: 100%;
display: flex;
background: #750505;
padding: 3px;

@media screen and (max-width: 992px){
    display: none;
}
`

const LogoComp = styled.img`
  z-index: 4;
  height: 40px;
  width: 40px;

  @media screen and (min-width: 992px){
    margin-left: .5%;
    height: 35px;
    width: 35px;
    padding: 3px;
  }
`

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
    <HeaderBoxMobile>
      <LogoComp src={isActive ? LogoWhite : LogoRed} />
      <Hamburger isActive={isActive} setIsActive={setIsActive} />
      <Drawer isOpen={isActive}/>
    </HeaderBoxMobile>

    <HeaderBoxDesktop>
      <LogoComp src={LogoWhite} />
      <DesktopMenu />
    </HeaderBoxDesktop>

    </>
  )
}

export default Header
