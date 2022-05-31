import axios from "axios";

class UserService {
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

    currentUser = async () => {
        return this.api.get("/api/user/{username}");
      };
    
      updateCurrentUser = async (requestBody) => {
        return this.api.put("/api/user/{username}", requestBody);
      };

      deleteCurrentUser = async (requestBody) => {
        return this.api.delete("/api/user/{username}", requestBody);
      };

      getCurrentUserFriends = async () => {
        return this.api.get("/api/user/{username}/friends");
      };

}

// Create one instance of the service
const userService = new UserService();

export default userService;