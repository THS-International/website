import React, { useState } from "react"
import Hamburger from "./hamburger"
import styled from "styled-components"
import LogoRed from "../images/logored.png"
import LogoWhite from "../images/logowhite.png"
import Drawer from "./drawer"

const HeaderBox = styled.header`
  padding: 15px 15px;
  display: flex;
  justify-content: space-between;
`

const LogoComp = styled.img`
  z-index: 4;
  height: 40px;
  width: 40px;
`

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <HeaderBox>
      <LogoComp src={isActive ? LogoWhite : LogoRed} />
      <Hamburger isActive={isActive} setIsActive={setIsActive} />
      <Drawer isOpen={isActive}/>
    </HeaderBox>
  )
}

export default Header
