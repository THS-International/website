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
  background-color: rgba(117, 5, 5, 1);
  overflow-x: hidden;
  a {
    font-family: "Roboto", sans-serif;
    padding: 2px;
    text-decoration: none;
    color: #fff;
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
  text-align: right;
  margin-top: 50px;
  margin-right: 70px;
`

const HeadLink = styled(Link)`
  font-size: 28px;
  font-weight: bold;
  margin-top: 4px;
`
const SubLink = styled(Link)`
  font-size: 18px;
`

const drawer: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Overlay width={isOpen ? "100%" : "0%"}>
      <OverlayContent>
        <HeadLink to="/">Home</HeadLink>
        <HeadLink to="/newstudents">For New Students</HeadLink>
        <SubLink to="/events">Events</SubLink>
        {/* <SubLink to="/guide">Guide for new students</SubLink> */}
        <HeadLink to="/about">About us</HeadLink>
        <SubLink to="/mission&vision">Mission & Vision</SubLink>
        {/* <SubLink to="/archive">Archive</SubLink>  */}
        <HeadLink to="/team">The Team</HeadLink>
        <SubLink to="/buddies">Buddies</SubLink>
        <SubLink to="/pt">Project Team</SubLink>
        <SubLink to="/pm">Project Manager</SubLink>
        <SubLink to="/join-us">Join Us</SubLink>
        <HeadLink to="/news">News</HeadLink>
        <HeadLink to="/partners">Partners</HeadLink>
        <HeadLink to="/contact">FAQ</HeadLink>
      </OverlayContent>
    </Overlay>
  )
}

export default drawer
