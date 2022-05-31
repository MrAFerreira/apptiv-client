import axios from "axios";

class EventService {
    constructor () {
        this.api = axios.create({
            baseUrl: process.env.REACT_APP_BASE_URL || "http://localhost:5005",
    });
    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
    // Retrieve the JWT token from the local storage
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      config.headers = { Authorization: `Bearer ${storedToken}` };
    }

    return config;
  });
    }

    
    getAllEvents = async () => {
        return this.api.get ("/api/events");
    };

    createEvent = async () => {
        return this.api.post ("/api/events");
    };

    updateCurrentEvent = async (requestBody) => {
        return this.api.put("/api/events/{eventId}", requestBody);
      };

      deleteCurrentEvent = async (requestBody) => {
        return this.api.delete("/api/events/{eventId}", requestBody);
      };
}

// Create one instance of the service
const eventService = new EventService();

export default eventService;