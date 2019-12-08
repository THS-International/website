import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Title = styled.div`
font-size: 36px;
font-family: 'Open sans';
font-weight: 600;
margin-left: 5%;
margin-top: 5%;
`


const Contact: React.FC = () => (
  <Layout>
    <SEO title="Contact" />
    <Title>FAQ</Title>
    </Layout>
)

export default Contact
