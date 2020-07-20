import axios from "axios";

class LocationService {
  getLocationInfo(lat, long) {
    return axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
    );
  }

  setupAxiosInterceptors() {
    const axiosLoc = axios.create();
    axiosLoc.interceptors.request.use((config) => {
      config.headers = {};
      return config;
    });
  }
}

export default new LocationService();
