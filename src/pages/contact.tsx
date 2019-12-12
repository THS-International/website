import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import FaqBox from "../components/FaqBox"
import { useStaticQuery, graphql } from "gatsby"

const Title = styled.div`
  font-size: 36px;
  font-family: "Open sans";
  font-weight: 600;
  margin-left: 5%;
  margin-top: 5%;
`

const Contact: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery2 {
      allFile {
        edges {
          node {
            name
          }
        }
        distinct(field: name)
      }
    }
  `)
  console.log(data.allFile.distinct);
  return(
    <Layout>
      <SEO title="Contact" />
      <Title>FAQ</Title>
      {data.allFile.distinct.map((index) => (
            <FaqBox category={index} ></FaqBox>   
          ))}
    </Layout>
  )
}
export default Contact
