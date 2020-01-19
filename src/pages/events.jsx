import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loadable from 'react-loadable'
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const LoadableCalendar = Loadable({
  loader: () => import('../components/EventsCalendar'),
  loading() {
    return <div>Loading all amazing events...</div>
  },
})

const query = graphql`
  query {
    markdownRemark(frontmatter: { type: { eq: "events-page" } }) {
      html
    }
  }
`
const Content = styled.div`
margin-top: 2%;
margin-bottom: 8%;
`

const Events = () => {
  const queryResult = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Events" />
      <h1>Events</h1>
      <Content dangerouslySetInnerHTML={{ __html: queryResult.markdownRemark.html }} />
      <LoadableCalendar />
    </Layout>
  )
}

export default Events
