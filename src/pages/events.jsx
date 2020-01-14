import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loadable from 'react-loadable'

const LoadableCalendar = Loadable({
  loader: () => import('../components/EventsCalendar'),
  loading() {
    return <div>Loading...</div>
  },
})

const Events = () => (
  <Layout>
    <SEO title="Events" />
    <h1>Events</h1>
    <LoadableCalendar />
      </Layout>
)

export default Events
