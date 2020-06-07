class AuthenticationService {
  registerUser(username, password) {
    sessionStorage.setItem("authenticatedUser", username);
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
}

export default new AuthenticationService();
