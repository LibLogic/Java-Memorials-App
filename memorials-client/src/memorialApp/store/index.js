import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  birthYear: "",
  deathYear: "",
  city: "",
  state: "",
  country: "",
  county: "",
  latitude: 0,
  longitiue: 0,
};

export const store = createStore(reducer, initialState);
