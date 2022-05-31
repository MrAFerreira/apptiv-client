import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import eventService from "../service/events.services";
import EventsCard from "../components/EventsCard";

const API_URL = "http://localhost:5005";

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
        return;
        <>
          <EventsCard {...event} />
        </>;
      })}
    </div>
  );
}

export default EventListPage;
