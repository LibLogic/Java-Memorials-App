import axios from "axios";
import { store } from "../../memorialApp/store";

const headers = {
  "Content-Type": "application/json",
  Authorization:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJkYXRlIjoiMjAyMC0wNy0wMlQxODozNzoyNFoiLCJjbGllbnQiOiI4MGZjZDg1NC0yYzc4LTQ2YjQtYjE0YS0zNDNmZjkyOGU1M2UiLCJwYXRoIjoiL2FwaS8xLjMvc2VhcmNoIn0.Uqxon477bUrTCRBTg1pRoC6SaVRZHSGEybvjerGpFYeq957iGUkAHOPUSwY8S2yCmgq4n1SnuomJLfmD6aNDrQ",
};

class billionGravesService {
  retreiveSubject() {
    return axios.get(
      `https://cors-anywhere.herokuapp.com/https://billiongraves.com/search/results?AMPLabel=HomePageSearch&AMPValue=HomePage&given_names=${
        store.getState().firstName
      }&family_names=${store.getState().lastName}&cemetery_state=${
        store.getState().state
      }&cemetery_county=${store.getState().county}`
    );
  }

  retreiveSubject2() {
    this.setupAxiosInterceptors();
    return axios.post(
      "https://cors-anywhere.herokuapp.com/https://billiongraves.com/api/1.3/search",
      {
        cemetery_country: store.getState().subjectData.country,
        cemetery_state: store.getState().subjectData.state,
        cemetery_county: store.getState().subjectData.county,
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
