import axios from "axios";

class billionGravesService {
  retreiveSubject() {
    return axios.get(
      "https://billiongraves.com/search/results?given_names=David&family_names=Hodgkinson&year_range=5&size=15"
    );
  }

  retreiveSubject2() {
    return axios.post("hello");
  }
}

export default new billionGravesService();
