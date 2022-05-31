import React from "react";
import { useState, useEffect } from "react";
import eventService from "../service/events.services";
import EventsCard from "../components/EventsCard";

function EventListPage() {
  const [events, setEvents] = useState([]);

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    const response = eventService.getAllEvents();
    setEvents(response.data);
  }, []);

  return (
    <div>
      {events.map((event) => {
        return (
        <>
          <EventsCard {...event} />
        </>
        )
      })}
    </div>
  );
}

export default EventListPage;
