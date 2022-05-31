import axios from "axios";

class UserService {
  constructor() {
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

  currentUser = async (userId) => {
    return this.api.get(`/api/user/${userId}`);
  };

  updateCurrentUser = async (userId, requestBody) => {
    return this.api.put(`/api/user/${userId}`, requestBody);
  };

  deleteCurrentUser = async (userId, requestBody) => {
    return this.api.delete(`/api/user/${userId}`, requestBody);
  };

  getCurrentUserFriends = async (userId) => {
    return this.api.get(`/api/user/${userId}/friends`);
  };
}

// Create one instance of the service
const userService = new UserService();

export default userService;
