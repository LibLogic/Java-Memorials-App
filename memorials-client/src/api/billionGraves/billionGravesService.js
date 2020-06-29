import axios from "axios";
// import { store } from "../../memorialApp/store";

const headers = {
  "Content-Type": "application/json",
  Authorization:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJkYXRlIjoiMjAyMC0wNi0yOVQwMDo0Njo1MVoiLCJjbGllbnQiOiI4MGZjZDg1NC0yYzc4LTQ2YjQtYjE0YS0zNDNmZjkyOGU1M2UiLCJwYXRoIjoiL2FwaS8xLjMvc2VhcmNoIn0.iWXWYUnjDkRHF5h5DI0V7A1EVNxsfuc1HdSZ9YUkskSpffWPpprSK5PJ6bDN2071Wgj2GspHCflwwA13-Raiog",
};

class billionGravesService {
  retreiveSubject() {
    // return axios.get(
    //   "https://cors-anywhere.herokuapp.com/https://billiongraves.com/search"
    // );
    return axios.get(
      `https://cors-anywhere.herokuapp.com/https://billiongraves.com/search/results?cemetery_country=${
        this.state().country
      }&cemetery_state=${this.state().state}&cemetery_county=${
        this.state().county
      }&given_names=${this.state().firstName}&family_names=${
        this.state().lastName
      }&year_range=5&size=15`
    );
  }

  retreiveSubject2() {
    this.setupAxiosInterceptors();
    return axios.post(
      "https://cors-anywhere.herokuapp.com/https://billiongraves.com/api/1.3/search",
      {
        cemetery_country: this.state().country,
        cemetery_state: this.state().state,
        cemetery_county: this.state().county,
        given_names: this.state().firstName,
        family_names: this.state().lastName,
        exact: false,
        phonetic: false,
        year_range: 5,
        military: false,
        conflict: null,
        branch: null,
        rank: null,
        start: 0,
        size: 15,
      },
      {
        headers: headers,
      }
    );
  }

  setupAxiosInterceptors() {
    console.log("intercept");
    const axiosBG = axios.create();
    axiosBG.interceptors.request.use((config) => {
      config.headers = {};
      return config;
    });
  }
}

export default new billionGravesService();
