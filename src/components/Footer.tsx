import styled from "styled-components"
import React from "react"

const FooterContent = styled.footer`
  background-color: #750505;
  height: 3rem;
  padding: 1rem;
  font-size: 12px;
  font-weight: 600;
  align-self: center;
  color: rgba(255, 255, 255, 0.9);
`
const Footer: React.FC = () => {
  return <FooterContent>International reception 2019</FooterContent>
}

export default Footer
