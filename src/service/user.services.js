import axios from 'axios';

class UserService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    });
    // Automatically set JWT token in the headers for every request

    this.storedToken = localStorage.getItem('authToken');

    this.headers = { Authorization: `Bearer ${this.storedToken}` };
  }

  currentUser = (username) => {
    return this.api.get(`/api/user/${username}`);
  };

  updateCurrentUser = (requestBody, userId) => {
    return this.api.put(`/api/user/${userId}`, requestBody);
  };

  deleteCurrentUser = (userId) => {
    return this.api.delete(`/api/user/${userId}/delete`);
  };

  getCurrentUserFriends = (username) => {
    return this.api.get(`/api/user/${username}/friends`);
  };
}

// Create one instance of the service
const userService = new UserService();

export default userService;
