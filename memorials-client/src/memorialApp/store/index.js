import { createStore } from "redux";

const initialState = {
  subjectData: {
    siteId: null,
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
    flowers: {
      showModal: false,
      showFBModal: false,
      details: [],
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
  sitesData: [
    {
      siteId: 0,
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
      cemeteryName: "Saint Ann Cemetery",
      graveInfo: {
        stoneImg: "",
        latitude: 41.79794,
        longitude: -71.4632739,
      },
      flowers: {
        showModal: false,
        showFBModal: false,
        details: [],
      },
    },
    {
      siteId: 1,
      firstName: "Elizabeth",
      middleName: "Constance",
      lastName: "Donnelly",
      maidenName: "Moore",
      birthYear: "1939",
      deathYear: "2001",
      city: "Cranston",
      state: "Rhode Island",
      county: "Providence",
      country: "United States",
      cemeteryName: "Saint Ann Cemetery",
      graveInfo: {
        stoneImg: "",
        latitude: 41.79794,
        longitude: -71.4632739,
      },
      flowers: {
        showModal: false,
        showFBModal: false,
        details: [],
      },
    },
    {
      siteId: 2,
      firstName: "Amos",
      middleName: "H",
      lastName: "Kennedy",
      maidenName: "",
      birthYear: "1907",
      deathYear: "1966",
      city: "Cranston",
      state: "Rhode Island",
      county: "Providence",
      country: "United States",
      cemeteryName: "Saint Ann Cemetery",
      graveInfo: {
        stoneImg: "",
        latitude: 41.79345,
        longitude: -71.4625964,
      },
      flowers: {
        showModal: false,
        showFBModal: false,
        details: [],
      },
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        deviceLocation: {
          ...state.deviceLocation,
          [action.key]: action.value,
        },
        subjectData: {
          ...state.subjectData,
          [action.key]: action.value,
        },
      };

    case "OPEN_MODAL":
      return {
        ...state,
        subjectData: {
          ...state.subjectData,
          flowers: {
            ...state.subjectData.flowers,
            showModal: action.showModal,
          },
        },
      };

    case "ADD_FLOWER":
      return {
        ...state,
        subjectData: {
          ...state.subjectData,
          flowers: {
            ...state.subjectData.flowers,
            showModal: action.showModal,
            showFBModal: action.showFBModal,
            details: [
              ...state.subjectData.flowers.details,
              {
                leftBy: action.leftBy || "Anonymous",
                date: action.date,
              },
            ],
          },
        },
      };

    case "SET_TO_DEVICE_LOCATION":
      return {
        ...state,
        deviceLocation: {
          ...state.deviceLocation,
          latitude: action.deviceLocation.latitude,
          longitude: action.deviceLocation.longitude,
          city: action.deviceLocation.city,
          state: action.deviceLocation.state,
          county: action.deviceLocation.county,
          country: action.deviceLocation.country,
        },
        subjectData: {
          ...state.subjectData,
          firstName: action.firstName,
          middleName: action.middleName,
          lastName: action.lastName,
          maidenName: action.maidenName,
          birthYear: action.birthYear,
          deathYear: action.deathYear,
          cemeteryName: action.cemeteryName,
          graveInfo: {
            ...state.subjectData.graveInfo,
            stoneImg: action.stoneImg,
          },
        },
      };

    case "SET_SUBJECT_INFO":
      return {
        ...state,
        subjectData: {
          ...state.subjectData,
          flowers: action.subjectData.flowers,
          siteId: action.subjectData.siteId,
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
            ...state.subjectData.graveInfo,
            stoneImg: action.subjectData.graveInfo.stoneImg,
            latitude: action.subjectData.graveInfo.latitude,
            longitude: action.subjectData.graveInfo.longitude,
          },
        },
      };

    case "SET_LOC_AREA":
      return {
        ...state,
        subjectData: {
          ...state.subjectData,
          firstName: action.firstName,
          middleName: action.middleName,
          lastName: action.lastName,
          birthYear: action.birthYear,
          deathYear: action.deathYear,
          graveInfo: {
            ...state.subjectData.graveInfo,
            latitude: action.latitude,
            longitude: action.longitude,
          },
        },
        deviceLocation: {
          ...state.deviceLocation,
          latitude: action.latitude,
          longitude: action.longitude,
          city: action.city,
          state: action.state,
          county: action.county,
          country: action.country,
        },
      };

    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
