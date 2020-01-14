import React, { useState } from "react"
import Hamburger from "./hamburger"
import { navigate } from "gatsby"
import styled from "styled-components"
//@ts-ignore
import LogoRed from "../images/logored.png"
//@ts-ignore
import LogoWhite from "../images/logowhite.png"
import Drawer from "./drawer"
import DesktopMenu from "./DesktopMenu"

const HeaderBoxMobile = styled.header`
  padding: 15px 15px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 967px) {
    display: none;
  }
`
const HeaderBoxDesktop = styled.header`
  position: absolute;
  width: 100%;
  display: flex;
  top: 0;
  right: 0;
  padding: 3px;

  @media screen and (max-width: 966px) {
    display: none;
  }
`

const LogoComp = styled.img`
  z-index: 4;
  height: 40px;
  width: 40px;

  @media screen and (min-width: 967px) {
    margin-top: 0.4%;
    margin-left: 0.8%;
    height: 35px;
    width: 35px;
    padding: 3px;
  }

  :hover {
    cursor: pointer;
  }
`

const Header: React.FC<{onIndex: boolean}> = ({ onIndex }) => {
  const [isActive, setIsActive] = useState(false)

    var logoColor
    var hamColor
    if(isActive || onIndex){
      logoColor = LogoWhite;
      hamColor = "white"
    }
    else {
      logoColor = LogoRed;
      hamColor = "#750505"
    }

  return (
    <>
      <HeaderBoxMobile>
        <LogoComp
          onClick={() => {
            navigate("/")
          }}
          src={logoColor}
        />
        <Hamburger isActive={isActive} setIsActive={setIsActive} color={hamColor}/>
        <Drawer isOpen={isActive} />
      </HeaderBoxMobile>

      <HeaderBoxDesktop>
        <LogoComp
          onClick={() => {
            navigate("/")
          }}
          src={LogoRed}
        />
        <DesktopMenu />
      </HeaderBoxDesktop>
    </>
  )
}

export default Header
