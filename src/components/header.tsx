import React from "react"
import Hamburger from "./hamburger"

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle }) => (
  <header>
    <Hamburger/>
  </header>
)

export default Header
