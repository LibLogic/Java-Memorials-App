import axios from "axios";
import { API_URL_ROOT, AUTH_USER_NAME } from "../constants";

class AuthenticationService {
  getJwtToken(username, password) {
    return axios.post(`${API_URL_ROOT}/authenticate`, {
      username,
      password,
    });
  }

  registerUser(username, jwtToken) {
    sessionStorage.removeItem(AUTH_USER_NAME);
    sessionStorage.setItem(AUTH_USER_NAME, username);
    this.setupAxiosInterceptors(jwtToken);
  }

  logout() {
    sessionStorage.removeItem(AUTH_USER_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTH_USER_NAME);
    if (user === null) {
      return false;
    } else {
      return true;
    }
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(AUTH_USER_NAME);
    if (user === null) {
      return false;
    } else {
      return user;
    }
  }

  setupAxiosInterceptors(jwtToken) {
    const axiosJwt = axios.create();
    axiosJwt.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = `Bearer ${jwtToken}`;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
