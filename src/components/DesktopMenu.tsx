import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeadLink = styled(Link)`
  color: white;
  z-index: 4;
  padding: 0 1% 0 1%;
  text-decoration: none;

  font-size: 16px;
  font-weight: lighter;
  margin-top: 8px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }

`
const SubLink = styled(HeadLink)`
  font-size: 14px;
  text-decoration: none;
`


const Container = styled.span`
  font-family: "Roboto";
  text-decoration: none;
  margin-left: 10%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    min-width: 966px;
  
    > li { /* Head links */
        display: inline;
        margin: 0;
        padding: 10px;

        :hover ul{
            display: inline-block;
        }

        :hover > ${HeadLink} {
            color: #c7b7b7;
        }

        > ul { /* List of sublinks */
            z-index: -1;
            display: none;
            min-width: 250px;
            background: #750505;
            position: absolute;
            padding: 33px 0 0 0px;
            list-style: none;

            :hover {
                display: inline-block;
            }

            > li {
                padding: 2%;
                padding-left: 15px;
                padding-right: 10px;
                transition: padding-left .15s ease-in-out;

                :hover ${SubLink} {
                    /* color: #750505; */
                    color: #c7b7b7;
                }

                :hover{
                    /* background: #f5eeed; */
                    padding-left: 20px;
                }
            }
        }
  
  }

   

  }
`

const DesktopMenu: React.FC = () => {
  return (
    <Container>
      <ul>
        <li><HeadLink to="/">Home</HeadLink></li>
        <li>
          <ul>
            <li><SubLink to="/events">Events</SubLink></li>
            <li><SubLink to="/guide">Guide for new students</SubLink></li>
          </ul>
          <HeadLink to="/">For New Students</HeadLink>
        </li>
        <li>
          <ul>
            <li><SubLink to="/vision">Mission & Vision</SubLink></li>
            <li><SubLink to="/archive">Archive</SubLink></li>
          </ul>
          <HeadLink to="/about">About us</HeadLink>
        </li>
        <li>
          <ul>
            <li><SubLink to="/buddies">Buddies</SubLink></li>
            <li><SubLink to="/">Project Team</SubLink></li>
            <li><SubLink to="/">Project Manager</SubLink></li>
            <li><SubLink to="/join-us">Join Us</SubLink></li>
          </ul>
          <HeadLink to="/team">The Team</HeadLink>
        </li>
        <li><HeadLink to="/news">News</HeadLink></li>
        <li><HeadLink to="/contact">Contact</HeadLink></li>
        <li><HeadLink to="/">Partners</HeadLink></li>
      </ul>
    </Container>
  )
}

export default DesktopMenu
