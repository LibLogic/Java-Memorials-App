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
    sessionStorage.setItem("authenticatedUser", username);
    this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) {
      return false;
    } else {
      return true;
    }
  }

  getLoggedInUser() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) {
      return false;
    } else {
      return user;
    }
  }

  setupAxiosInterceptors(basicAuthHeader) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = basicAuthHeader;
      }
      return config;
    });
  }
}

export default new AuthenticationService();
