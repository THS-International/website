import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import NewsGenerator from "../components/NewsGenerator"

const NewsBlock = styled.div`
  margin-top: 10%;
  width: 90%;
  margin: 5%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const News: React.FC = () => (
  <Layout>
    <SEO title="Join" />
    <h1>News</h1>

    <NewsBlock>
      <NewsGenerator />
    </NewsBlock>
  </Layout>
)

export default News
