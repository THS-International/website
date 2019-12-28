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
`

const query = graphql`
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
`

const ContactPage: React.FC = () => {
  const data = useStaticQuery(query).markdownRemark.frontmatter.categories
  return (
    <Layout>
      <SEO title="Contact" />
      <Title>FAQ</Title>
      {data.map(item => (
        <FaqBox category={item.category} questions={item.questions} />
      ))}
    </Layout>
  )
}

export default ContactPage
