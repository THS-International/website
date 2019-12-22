import React from "react"
import styled from "styled-components"
import FaqBox from "../components/FaqBox"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"


const Title = styled.div`
  font-size: 36px;
  font-family: "Open sans";
  font-weight: 600;
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
`

const ContactPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { type: { eq: "faq-page" } }) {
        frontmatter {
          title
          categories {
            category
            questions {
              description
              title
            }
          }
        }
      }
    }
  `).markdownRemark.frontmatter.categories
  return (
    <Layout>
      <SEO title="Contact" />
      <Title>FAQ</Title>
      {data.map(category => (
        <FaqBox category={category} />
      ))}
    </Layout>
  )
}

export default ContactPage
