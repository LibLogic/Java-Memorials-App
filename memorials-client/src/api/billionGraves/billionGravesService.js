import axios from "axios";
import { store } from "../../memorialApp/store";

const headers = {
  "Content-Type": "application/json",
  Authorization:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJkYXRlIjoiMjAyMC0wNy0xNlQwMDoxNTo1MVoiLCJjbGllbnQiOiI4MGZjZDg1NC0yYzc4LTQ2YjQtYjE0YS0zNDNmZjkyOGU1M2UiLCJwYXRoIjoiL2FwaS8xLjMvc2VhcmNoIn0.dQk9MQ201igTKr8nHN9HIEWaQr9O6BIGDZKj0CkzH9DkGNljy4OsABDee3EM2jJpSRV4Ob9WAn4k3STidIFvjA",
};

class billionGravesService {
  retreiveSubject() {
    this.setupAxiosInterceptors();
    return axios.post(
      "http://localhost:1337/https://billiongraves.com/api/1.3/search",
      {
        cemetery_country: store.getState().deviceLocation.country,
        cemetery_state: store.getState().deviceLocation.state,
        cemetery_county: store.getState().deviceLocation.county,
        given_names: store.getState().subjectData.firstName,
        family_names: store.getState().subjectData.lastName,
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
    const axiosBG = axios.create();
    axiosBG.interceptors.request.use((config) => {
      config.headers = {};
      return config;
    });
  }
}

export default new billionGravesService();
