import React, { useState, useEffect } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import googleCalendarPlugin from "@fullcalendar/google-calendar"
import styled from "styled-components"
import Exit from "../images/Vector.svg"

import "@fullcalendar/core/main.css"
import "@fullcalendar/daygrid/main.css"
import "@fullcalendar/timegrid/main.css"

const ED = styled.div`
  z-index: 2;
  position: absolute;
  width: 50%;
  max-width: 250px;
  background: white;
  box-shadow: 0px 0px 18px -9px rgba(0, 0, 0, 0.42);
  border-radius: 10px;
  padding: 0.5% 5% 0.5% 1%;

  img {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 12px;
    opacity: .8;

    :hover {
      opacity: 1;
    }
  }
`

const Description = styled.div`
font-size: 14px;
`

const Time = styled.div`
font-weight: 300;
font-size: 14px;
`

const EDtitle = styled.div`
font-weight: 600;
`

const EventsCalendar = () => {
  const [Pos, setPos] = useState([0, 0])
  const [Show, setShow] = useState("none")
  const [FocEvent, setFocEvent] = useState({
    title: "title",
    description: "price",
    Time: "8am"
  })


  const details = info => {
    let xpos = info.el.getBoundingClientRect().left + window.scrollX
    let ypos = info.el.getBoundingClientRect().bottom + window.scrollY
    if (xpos + 140 > screen.width) {
      xpos -= 180
    }
    if (ypos + 100 > screen.height){
      ypos -= 140
    }

    setPos([xpos, ypos + 20])
    setFocEvent({
      title: info.event.title,
      description: parseInt(info.event.extendedProps.description).toString(),
      Time: info.event.start.getDate() + "th " + info.event.start.toTimeString().substring(0,5) + " - " + info.event.end.toTimeString().substring(0,5)
    })
    setShow("block")
  }

  useEffect(() => { if(window.innerWidth > 966) setShow("none") }, [Show])

  return (
    <>
      <ED style={{ left: Pos[0], top: Pos[1], display: Show}}>
        <EDtitle>{FocEvent.title}</EDtitle>
        <Time>{FocEvent.Time}</Time>
        <Description>Price: {FocEvent.description}kr</Description>
        <img onClick={() => setShow("none")} src={Exit} style={window.innerWidth > 966 ? {display: "none"} : {display: "block"}} alt="Logo"/>
      </ED>

      <FullCalendar
        height={800}
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, googleCalendarPlugin, timeGridPlugin]}
        googleCalendarApiKey="AIzaSyCyZUWpxBhRobfoHrMMcKH8J_1CrFZOqVs"
        eventSources={[
          {
            googleCalendarId:
              "thskth.se_ejt9mctcnlgtc5lkon90u6bsio@group.calendar.google.com",
          },
        ]}
        eventClick={info => {
          info.jsEvent.preventDefault()
          details(info)
        }}
        eventMouseEnter={ info => {
          details(info)
        }}
        eventMouseLeave={ () => {
          setShow("none")
        }}
        
        />
    </>
  )
}
export default EventsCalendar
