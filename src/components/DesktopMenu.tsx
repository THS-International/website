import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeadLink = styled(Link)`
  z-index: 4;
  padding: 0 1% 0 1%;
  text-decoration: none;

  font-size: 14px;
  font-weight: lighter;
  margin-top: 8px;

  transition: color 1s ease;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #2e2e2e;
  }
`
const SubLink = styled(HeadLink)`
  font-size: 12px;
  font-weight: lighter;
`

const Container = styled.span`
  font-family: "Roboto";
  text-decoration: none;
  margin-left: 5%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    min-width: 966px;

    > li {
      /* Head links */
      display: inline;
      margin: 0;
      padding: 10px;

      :hover ul {
        visibility: visible;
        opacity: 1;
      }

      :hover > ${HeadLink} {
        color: #750505;
      }

      > span {
        /* List of sublinks */
        position: absolute;
        /* background: white; */
        display: inline-block;
        padding: 0px 0px 40px 0px;
        min-width: 200px;
        height: 40px;
        z-index: -1;

        &:hover ul {
          visibility: visible;
          opacity: 1;
        }

        > ul {
          background: white;
          display: inline-block;
          visibility: hidden;
          transition: visibility 0s, opacity 0.5s ease-in-out;
          min-width: 200px;
          position: absolute;
          padding: 5px 0 5px 0px;
          list-style: none;
          box-shadow: 0px 0px 18px -9px rgba(0, 0, 0, 0.42);
          border-radius: 10px;
          margin-top: 40px;
          opacity: 0;

          > li {
            padding: 2%;
            padding-left: 15px;
            padding-right: 10px;
            transition: padding-left 0.15s ease-in-out;

            :hover ${SubLink} {
              /* color: #750505; */
              color: #750505;
            }

            :hover {
              /* background: #f5eeed; */
              visibility: visible;
              padding-left: 20px;
            }
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
        <li>
          <HeadLink to="/">Home</HeadLink>
        </li>
        <li>
          <span>
            <ul>
              <li>
                <SubLink to="/events">Events</SubLink>
              </li>
              <li>
                <SubLink to="/guide">Guide for new students</SubLink>
              </li>
            </ul>
          </span>
          <HeadLink to="/">For New Students</HeadLink>
        </li>
        <li>
          <span>
            <ul>
              <li>
                <SubLink to="/vision">Mission & Vision</SubLink>
              </li>
              <li>
                <SubLink to="/archive">Archive</SubLink>
              </li>
            </ul>
          </span>
          <HeadLink to="/about">About us</HeadLink>
        </li>
        <li>
          <span>
            <ul>
              <li>
                <SubLink to="/buddies">Buddies</SubLink>
              </li>
              <li>
                <SubLink to="/pt">Project Team</SubLink>
              </li>
              <li>
                <SubLink to="/pm">Project Manager</SubLink>
              </li>
              <li>
                <SubLink to="/join-us">Join Us</SubLink>
              </li>
            </ul>
          </span>
          <HeadLink to="/team">The Team</HeadLink>
        </li>
        <li>
          <HeadLink to="/news">News</HeadLink>
        </li>
        <li>
          <HeadLink to="/contact">Contact</HeadLink>
        </li>
        <li>
          <HeadLink to="/">Partners</HeadLink>
        </li>
      </ul>
    </Container>
  )
}

export default DesktopMenu
