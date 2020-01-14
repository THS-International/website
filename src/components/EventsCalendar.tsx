import React from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'


import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

const EventsCalendar = () => {  
    
    return (
            <FullCalendar defaultView="dayGridMonth" 
            plugins={[ dayGridPlugin, googleCalendarPlugin, timeGridPlugin ]}
            googleCalendarApiKey="AIzaSyCyZUWpxBhRobfoHrMMcKH8J_1CrFZOqVs"
            eventSources={
                [{googleCalendarId: "thskth.se_ejt9mctcnlgtc5lkon90u6bsio@group.calendar.google.com"}]
            }

            />
    )
  }
  export default EventsCalendar
  