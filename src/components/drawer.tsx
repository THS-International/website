import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Overlay = styled.div`
  height: 100%;
  width: ${({ width }: { width: string }) => width};
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: rgb(169, 23, 23, 1);
  overflow-x: hidden;
  a {
    font-family: "Roboto", sans-serif;
    padding: 4px;
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
  top: 5%;
  text-align: right;
  margin-top: 30px;
  margin-right: 60px;
`

const HeadLink = styled(Link)`
  
  font-size: 30px;
  font-weight: bold;
  margin-top: 8px;
`
const SubLink = styled(Link)`
  font-size: 20px;
`

const drawer: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Overlay width={isOpen ? "100%" : "0%"}>
      <OverlayContent>
        <HeadLink to="/">Home</HeadLink>
        <HeadLink to="/">For New Students</HeadLink>
          <SubLink to="/events">Events</SubLink>
          <SubLink to="/guide">Guide for new students</SubLink>
        <HeadLink to="/about">About us</HeadLink>
          <SubLink to="/vision">Mission & Vision</SubLink>
          <SubLink to="/archive">Archive</SubLink>
        <HeadLink to="/team">The Team</HeadLink>
          <SubLink to="/buddies">Buddies</SubLink>
          <SubLink to="/">Project Team</SubLink>
          <SubLink to="/">Project Manager</SubLink>
          <SubLink to="/join-us">Join Us</SubLink>
        <HeadLink to="/">News</HeadLink>
        <HeadLink to="/">Contact</HeadLink>
        <HeadLink to="/">Partners</HeadLink>
      </OverlayContent>
    </Overlay>
  )
}

export default drawer
