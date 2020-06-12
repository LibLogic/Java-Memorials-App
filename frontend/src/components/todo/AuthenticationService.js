import axios from "axios";

class AuthenticationService {
  createBasicAuthToken(username, password) {
    let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    return basicAuthHeader;
  }

  executeBasicAuthenticationService(username, password) {
    return axios.get("http://localhost:8080/basicauth", {
      headers: {
        authorization: this.createBasicAuthToken(username, password),
      },
    });
  }

  registerUser(username, password) {
    sessionStorage.setItem("authenticatedUserName", username);
    sessionStorage.setItem(
      "authToken",
      this.createBasicAuthToken(username, password)
    );
    this.setupAxiosInterceptors();
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

  setupAxiosInterceptors() {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = sessionStorage.getItem("authToken");
      }
      return config;
    });
  }
}

export default new AuthenticationService();
