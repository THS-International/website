import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Overlay = styled.div`
  height: 100%;
  width: ${({ width }: { width: string }) => width};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(169, 23, 23, 0.95);
  overflow-x: hidden;
  transition: 0.05s;
  a {
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    padding: 16px;
    text-decoration: none;
    font-size: 36px;
    color: #FFF;
    display: block;
    transition: 0.3s;
    &:hover,
    &:focus {
      color: #f1f1f1;
    }
  }
`

const OverlayContent = styled.div`
  position: relative;
  top: 10%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
`

const drawer: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Overlay width={isOpen ? "100%" : "0%"}>
      <OverlayContent >
        <Link to="/">Home</Link>
        <Link to="/">Reception 2020</Link>
        <Link to="/">Team</Link>
        <Link to="/">News</Link>
        <Link to="/">Contact</Link>
      </OverlayContent>
    </Overlay>
  )
}

export default drawer
