import axios from "axios";
import { store } from "../../store";

const headers = {
  "Content-Type": "application/json",
  Authorization:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJkYXRlIjoiMjAyMC0wOC0wNFQxODozMzo0NFoiLCJjbGllbnQiOiI4MGZjZDg1NC0yYzc4LTQ2YjQtYjE0YS0zNDNmZjkyOGU1M2UiLCJwYXRoIjoiL2FwaS8xLjMvc2VhcmNoIn0.p6avuhl0RlOcxa3pXeUfqFgSGGy0AEugrsjASz-KwDqS3l4UthAfbEt9xxoFezPJVfV4_jzb6hM1C2cjD9nggg",
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
        size: 5,
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
