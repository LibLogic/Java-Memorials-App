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
    county: "Providence",
    country: "United States",
    graveInfo: {
      stoneImg: "",
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
          city: state.subjectData.city,
          state: state.subjectData.state,
          county: state.subjectData.county,
          country: state.subjectData.country,
          cemeteryName: state.subjectData.cemeteryName,
          graveInfo: {
            stoneImg: action.subjectData.graveInfo.stoneImg,
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
