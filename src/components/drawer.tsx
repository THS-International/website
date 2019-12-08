import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Overlay = styled.div`
  height: 100%;
  width: ${({ width }: { width: string }) => width};
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: rgb(169, 23, 23, 1);
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
  width: 95%;
  text-align: right;
  margin-top: 30px;
`

const HeadLink = styled(Link)`
font-size: 30px;
color: blue;
`
const SubLink = styled(Link)`
font-size: 20px;
`

const drawer: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Overlay width={isOpen ? "100%" : "0%"}>
      <OverlayContent >
        <HeadLink to="/">Home</HeadLink>
        <HeadLink to="/">For New Students</HeadLink>
          <SubLink to="/">Events</SubLink>
          <SubLink to="/">Guide for new students</SubLink>
        <HeadLink to="/">About us</HeadLink>
          <SubLink to="/">Mission & Vision</SubLink>
          <SubLink to="/">Archive</SubLink>
        <HeadLink to="/">The Team</HeadLink>
          <SubLink to="/">Buddies</SubLink>
          <SubLink to="/">Project Team</SubLink>
          <SubLink to="/">Project Manager</SubLink>
          <SubLink to="/">Join Us</SubLink>
        <HeadLink to="/">News</HeadLink>
        <HeadLink to="/">Contact</HeadLink>
        <HeadLink to="/">Partners</HeadLink>
      </OverlayContent>
    </Overlay>
  )
}

export default drawer
