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
  position: ${({ pos }: {pos: string}) => pos};
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 967px){
    display: none;
  }
`
const HeaderBoxDesktop = styled.header`
position: ${({ pos }: {pos: string}) => pos};
width: 100%;
display: flex;
/* background: #750505; */
/* background: blue; */
padding: 3px;

@media screen and (max-width: 966px){
    display: none;
}
`

const LogoComp = styled.img`
  z-index: 4;
  height: 40px;
  width: 40px;

  @media screen and (min-width: 967px){
    margin-top: .4%;
    margin-left: .8%;
    height: 35px;
    width: 35px;
    padding: 3px;
  }

  :hover {
    cursor: pointer;
  }
`

interface Props {
  hpos?: string
}


const Header: React.FC<Props> = ({ hpos }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
    <HeaderBoxMobile pos={hpos}>
      <LogoComp onClick={() => {navigate("/")}} src={LogoWhite} />
      <Hamburger isActive={isActive} setIsActive={setIsActive} />
      <Drawer isOpen={isActive}/>
    </HeaderBoxMobile>

    <HeaderBoxDesktop pos={hpos}>
      <LogoComp onClick={() => {navigate("/")}} src={LogoRed} />
      <DesktopMenu />
    </HeaderBoxDesktop>

    </>
  )
}

export default Header
