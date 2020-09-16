// import { store } from "../../store";
import axios from "axios";
import { API_URL_ROOT } from "../../constants";

const headers = {
  "Content-Type": "application/json",
};

class AngelCloudService {
  findSiteByLocation(latitude, longitude) {
    latitude = parseFloat(latitude).toFixed(5);
    longitude = parseFloat(longitude).toFixed(5);
    this.setupAxiosInterceptors();
    return axios.get(
      `${API_URL_ROOT}/search?latitude=${latitude}&longitude=${longitude}`,
      {
        headers: headers,
      }
    );
  }

  getAllBurials() {
    this.setupAxiosInterceptors();
    return axios.get(`${API_URL_ROOT}/burials`, {
      headers: headers,
    });
  }

  getBurialById() {
    this.setupAxiosInterceptors();
    return axios.get(`${API_URL_ROOT}/burials`, {
      headers: headers,
    });
  }

  getBurialsBySiteId(siteId) {
    this.setupAxiosInterceptors();
    return axios.get(`${API_URL_ROOT}/sites/${siteId}/burials`, {
      headers: headers,
    });
  }

  getSiteByGeoLocation(latitude, longitude) {
    this.setupAxiosInterceptors();
    return axios.get(
      `${API_URL_ROOT}/search?latitude=${latitude}&longitude=${longitude}`,
      {
        headers: headers,
      }
    );
  }

  addFlower(flower, burialId) {
    this.setupAxiosInterceptors();
    return axios.post(`${API_URL_ROOT}/burials/${burialId}/addFlower`, flower, {
      headers: headers,
    });
  }

  setupAxiosInterceptors() {
    const axiosACS = axios.create();
    axiosACS.interceptors.request.use((config) => {
      config.headers = {};
      return config;
    });
  }
}

export default new AngelCloudService();
