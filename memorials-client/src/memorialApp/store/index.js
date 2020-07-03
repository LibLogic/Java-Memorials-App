import { createStore } from "redux";

const initialState = {
  subjectData: {
    firstName: "David",
    middleName: "Joseph",
    lastName: "Hodgkinson",
    birthYear: "1965",
    deathYear: "1965",
    city: "Cranston",
    state: "Rhode Island",
    county: "Kent",
    country: "United States",
    graveInfo: {
      stoneImage: "",
      latitude: 0,
      longitude: 0,
    },
  },
  deviceLocation: {
    latitude: 41.79794000413588,
    longitude: -71.46327390674594,
  },
};

const reducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case "INPUT_CHANGE":
      return Object.assign({}, state, {
        subjectData: Object.assign({}, state.subjectData, {
          [action.key]: action.value,
        }),
      });
    case "SET_SUBJECT_INFO":
      return Object.assign({}, state, {
        subjectData: {
          firstName: action.subjectData.firstName,
          middleName: action.subjectData.middleName,
          lastName: action.subjectData.lastName,
          birthYear: action.subjectData.birthYear,
          deathYear: action.subjectData.deathYear,
          graveInfo: {
            latitude: action.subjectData.graveInfo.latitude,
            longitude: action.subjectData.graveInfo.longitude,
          },
        },
      });
    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
