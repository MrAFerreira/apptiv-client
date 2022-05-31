import { useState, useEffect } from 'react';
import eventService from '../service/events.services';
import EventsCard from '../components/EventsCard';

function EventListPage() {
  const [events, setEvents] = useState([]);

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  const getEvents = async () => {
    let response = await eventService.getAllEvents();
    setEvents(response.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      {events &&
        events.map((event) => {
          return (
            <>
              <EventsCard {...event} />
            </>
          );
        })}
    </div>
  );
}

export default EventListPage;
