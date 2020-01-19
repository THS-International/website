import React, { useState, useEffect } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import googleCalendarPlugin from "@fullcalendar/google-calendar"
import styled from "styled-components"
// import Exit from "../images/vector.svg"

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
  padding: 0.5% 8% 0.5% 1%;

  svg {
    position: absolute;
    top: -312px;
    right: 10px;
    width: 12px;
    /* opacity: .8; */

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
      Time: info.event.start.getDate() + ": " + info.event.start.toTimeString().substring(0,5) + " - " + info.event.end.toTimeString().substring(0,5)
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
        {/* <img onClick={() => setShow("none")} src={Exit} style={window.innerWidth > 966 ? {display: "none"} : {display: "block"}} alt="Logo"/> */}
        <svg onClick={() => setShow("none")} style={window.innerWidth > 966 ? {display: "none"} : {display: "block"}} width="655" height="655" viewBox="0 0 655 655" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2841 638.781C-3.33688 623.16 -3.33688 597.833 12.2841 582.212L582.212 12.2844C597.833 -3.33659 623.16 -3.33657 638.781 12.2844L643.023 16.527C658.644 32.148 658.644 57.4746 643.023 73.0956L73.0953 643.024C57.4743 658.645 32.1477 658.645 16.5267 643.024L12.2841 638.781Z" fill="#4A4A4A"/>
<path d="M16.5268 12.2843C32.1477 -3.33664 57.4743 -3.33664 73.0953 12.2843L643.023 582.212C658.644 597.833 658.644 623.16 643.023 638.781L638.781 643.024C623.16 658.645 597.833 658.645 582.212 643.024L12.2841 73.0955C-3.33686 57.4745 -3.33684 32.1479 12.2841 16.527L16.5268 12.2843Z" fill="#4A4A4A"/>
      </svg>
      </ED>

      <FullCalendar
        height={850}
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
