import { createStore } from "redux";

const initialState = {
  subjectData: {
    firstName: "David",
    middleName: "Joseph",
    lastName: "Hodgkinson",
    maidenName: "",
    birthYear: "1965",
    deathYear: "1965",
    city: "Cranston",
    state: "Rhode Island",
    county: "Providence",
    country: "United States",
    cemeteryName: "",
    graveInfo: {
      stoneImg: "",
      latitude: 0,
      longitude: 0,
    },
  },
  deviceLocation: {
    latitude: 0,
    longitude: 0,
    city: 0,
    state: 0,
    county: 0,
    country: 0,
  },
  savedCoords: {
    latitude: 41.79794000413588,
    longitude: -71.46327390674594,
    firstName: "David",
    middleName: "Joseph",
    lastName: "Hodgkinson",
    maidenName: "",
    birthYear: "1965",
    deathYear: "1965",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return Object.assign({}, state, {
        deviceLocation: Object.assign({}, state.deviceLocation, {
          [action.key]: action.value,
        }),
        subjectData: Object.assign({}, state.subjectData, {
          [action.key]: action.value,
        }),
      });

    case "SET_DEVICE_LOCATION":
      return Object.assign({}, state, {
        deviceLocation: {
          latitude: action.deviceLocation.latitude,
          longitude: action.deviceLocation.longitude,
          city: action.deviceLocation.city,
          state: action.deviceLocation.state,
          county: action.deviceLocation.county,
          country: action.deviceLocation.country,
        },
      });

    case "SET_SUBJECT_INFO":
      return Object.assign({}, state, {
        subjectData: {
          firstName: action.subjectData.firstName,
          middleName: action.subjectData.middleName,
          lastName: action.subjectData.lastName,
          maidenName: action.subjectData.maidenName,
          birthYear: action.subjectData.birthYear,
          deathYear: action.subjectData.deathYear,
          city: action.subjectData.city,
          state: action.subjectData.state,
          county: action.subjectData.county,
          country: action.subjectData.country,
          cemeteryName: action.subjectData.cemeteryName,
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
