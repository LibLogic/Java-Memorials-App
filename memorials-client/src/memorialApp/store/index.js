import { createStore } from "redux";

const initialState = {
  subjectData: {
    firstName: "",
    middleName: "",
    lastName: "",
    maidenName: "",
    birthYear: "",
    deathYear: "",
    city: "",
    state: "",
    county: "",
    country: "",
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
  savedCoords: [
    {
      latitude: 41.79794000413588,
      longitude: -71.46327390674594,
      firstName: "David",
      middleName: "Joseph",
      lastName: "Hodgkinson",
      maidenName: "",
      birthYear: "1965",
      deathYear: "1965",
    },
    {
      latitude: 41.79345000095653,
      longitude: -71.4625964723873,
      firstName: "Amos",
      middleName: "H",
      lastName: "Kennedy",
      maidenName: "",
      birthYear: "1907",
      deathYear: "1966",
    },
    {
      latitude: 41.854034,
      longitude: -71.381065,
      firstName: "Howard",
      middleName: "Philips",
      lastName: "Lovecraft",
      maidenName: "",
      birthYear: "1890",
      deathYear: "1937",
    },
    {
      latitude: 41.545836223028,
      longitude: -71.538434519014,
      firstName: "Cecelia",
      middleName: "M",
      lastName: "Blair",
      maidenName: "Aldrich",
      birthYear: "1860",
      deathYear: "1903",
    },
  ],
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

    case "SET_TO_DEVICE_LOCATION":
      return Object.assign({}, state, {
        deviceLocation: {
          latitude: action.deviceLocation.latitude,
          longitude: action.deviceLocation.longitude,
          city: action.deviceLocation.city,
          state: action.deviceLocation.state,
          county: action.deviceLocation.county,
          country: action.deviceLocation.country,
        },
        subjectData: Object.assign({}, state.subjectData, {
          firstName: action.firstName,
          middleName: action.middleName,
          lastName: action.lastName,
          birthYear: action.birthYear,
          deathYear: action.deathYear,
        }),
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

    case "SET_LOC_AREA":
      return Object.assign({}, state, {
        subjectData: Object.assign({}, state, {
          firstName: action.firstName,
          middleName: action.middleName,
          lastName: action.lastName,
          birthYear: action.birthYear,
          deathYear: action.deathYear,
          graveInfo: {
            stoneImg: "action.subjectData.graveInfo.stoneImg",
            latitude: action.latitude,
            longitude: action.longitude,
          },
        }),
        deviceLocation: Object.assign({}, state, {
          latitude: action.latitude,
          longitude: action.longitude,
          city: action.city,
          state: action.state,
          county: action.county,
          country: action.country,
        }),
      });

    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
