import axios from 'axios';

class EventService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    });

    this.storedToken = localStorage.getItem('authToken');

    this.headers = { Authorization: `Bearer ${this.storedToken}` };
  }

  getAllEvents = () => {
    return this.api.get('/api/events', this.headers);
  };

  createEvent = async () => {
    return this.api.post('/api/events', this.headers);
  };

  updateCurrentEvent = async (requestBody, eventId) => {
    return this.api.put(`/api/events/${eventId}`, requestBody, this.headers);
  };

  deleteCurrentEvent = async (eventId) => {
    return await this.api.delete(`/api/events/${eventId}`, this.headers);
  };
}

// Create one instance of the service
const eventService = new EventService();

export default eventService;
