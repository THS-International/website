import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventsCalendar from "../components/EventsCalendar"

const Events: React.FC = () => (
  <Layout>
    <SEO title="Events" />
    <h1>Events</h1>
    <EventsCalendar></EventsCalendar>
      </Layout>
)

export default Events
