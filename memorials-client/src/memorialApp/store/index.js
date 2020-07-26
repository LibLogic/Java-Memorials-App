import { createStore } from "redux";

const initialState = {
  speechData: {
    firstName: "",
    middleName: "",
    lastName: "",
    birthYear: "",
    deathYear: "",
  },
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
    showModal: false,
    showFBModal: false,
    flowers: {
      details: [],
    },
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
      showModal: false,
      showFBModal: false,
      flowers: {
        details: [],
      },
      graveInfo: {
        stoneImg: "",
        latitude: 41.79794,
        longitude: -71.4632739,
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
      showModal: false,
      showFBModal: false,
      flowers: {
        details: [],
      },
      graveInfo: {
        stoneImg: "",
        latitude: 41.79794,
        longitude: -71.4632739,
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
      showModal: false,
      flowers: {
        details: [],
      },
      graveInfo: {
        stoneImg: "",
        latitude: 41.79345,
        longitude: -71.4625964,
      },
    },
    {
      siteId: 3,
      firstName: "Sarah",
      middleName: "F",
      lastName: "Hankinson",
      maidenName: "Cahoone",
      birthYear: "1889",
      deathYear: "1978",
      city: "West Warwick",
      state: "Rhode Island",
      county: "Kent County",
      country: "United States",
      cemeteryName: "Saint Mary Cemetery",
      showModal: false,
      showFBModal: false,
      flowers: {
        details: [],
      },
      graveInfo: {
        stoneImg: "",
        latitude: 41.68649,
        longitude: -71.51888,
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
          showModal: action.showModal,
        },
      };

    case "CLOSE_FB_MODAL":
      return {
        ...state,
        subjectData: {
          ...state.subjectData,
          showFBModal: action.showFBModal,
        },
      };

    case "ADD_FLOWER":
      return {
        ...state,
        subjectData: {
          ...state.subjectData,
          showModal: action.showModal,
          showFBModal: action.showFBModal,
          flowers: {
            ...state.subjectData.flowers,
            details: [
              ...state.subjectData.flowers.details,
              {
                leftBy: action.leftBy,
                date: action.date,
              },
            ],
          },
        },
        sitesData: [
          ...state.sitesData.slice(0, action.siteId),
          {
            ...state.sitesData[action.siteId],
            flowers: {
              ...state.sitesData[action.siteId].flowers,
              details: [
                ...state.sitesData[action.siteId].flowers.details,
                { leftBy: action.leftBy, date: action.date },
              ],
            },
          },
          ...state.sitesData.slice(action.siteId + 1),
        ],
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

    case "SAVE_NEW_SITE":
      return {
        ...state,
        sitesData: [...state.sitesData, action.sitesData],
      };

    case "SET_SPEECH_DATA":
      return {
        ...state,
        subjectData: {
          ...state.subjectData,
          firstName: action.speechData.firstName,
          middleName: action.speechData.middleName,
          lastName: action.speechData.lastName,
          birthYear: action.speechData.birthYear,
          deathYear: action.speechData.deathYear,
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
