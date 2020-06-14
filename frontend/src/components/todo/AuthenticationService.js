import axios from "axios";
import { API_URL_ROOT } from "./Constants";

class AuthenticationService {
  // createJwtToken(username, password) {
  //   let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
  //   return basicAuthHeader;
  // }

  executeJwtAuthenticationService(username, password) {
    return axios.post(`${API_URL_ROOT}/authenticate`, {
      username,
      password,
    });
  }

  registerUser(username, password, jwtToken) {
    sessionStorage.setItem("authenticatedUserName", username);
    sessionStorage.setItem(
      "authToken",
      this.createBasicAuthToken(username, password)
    );
    this.setupAxiosInterceptors(jwtToken);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUserName");
    sessionStorage.removeItem("authToken");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authToken");
    if (user === null) {
      return false;
    } else {
      return true;
    }
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem("authenticatedUserName");
    if (user === null) {
      return false;
    } else {
      return user;
    }
  }

  setupAxiosInterceptors(jwtToken) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.Authorization = `Bearer ${jwtToken}`;
        config.headers.Origin = "http://localhost:4200";
        // config.headers.Content-Type = 'application/json';
        // sessionStorage.getItem("authToken");
      }
      return config;
    });
  }
}

export default new AuthenticationService();
