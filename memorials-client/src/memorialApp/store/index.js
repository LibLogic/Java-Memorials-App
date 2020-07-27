import { createStore } from "redux";

const initialState = {
  currentIndex: null,
  showModal: false,
  showFBModal: false,
  speechData: {
    firstName: "",
    middleName: "",
    lastName: "",
    birthYear: "",
    deathYear: "",
  },
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
    photos: {
      main: "",
      subject: [],
      family: [],
    },
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
      photos: {
        main: "",
        subject: [],
        family: [],
      },
      flowers: {
        details: [
          {
            leftBy: "Tommy Hodgkinson",
            date: "07/26/2020",
          },
          {
            leftBy: "Kelly Hodgkinson",
            date: "07/26/2020",
          },
          {
            leftBy: "Carlene Hodgkinson",
            date: "07/26/2020",
          },
          {
            leftBy: "Stephen Hodgkinson",
            date: "07/26/2020",
          },
          {
            leftBy: "Carleton Hodgkinson",
            date: "07/26/2020",
          },
          {
            leftBy: "David Hodgkinson",
            date: "07/26/2020",
          },
        ],
      },
      graveInfo: {
        stoneImg: "",
        latitude: 41.79794,
        longitude: -71.4632739,
      },
    },
    {
      firstName: "Thomas",
      middleName: "Joseph",
      lastName: "Hodgkinson",
      maidenName: "",
      birthYear: "1938",
      deathYear: "2018",
      city: "Providence",
      state: "Rhode Island",
      county: "Providence",
      country: "United States",
      cemeteryName: "North Burial Ground",
      photos: {
        main: "../dad.jpg",
        subject: [],
        family: [],
      },
      flowers: {
        details: [
          {
            leftBy: "Dee Hodgkinson",
            date: "07/26/2020",
          },
          {
            leftBy: "Tommy Hodgkinson",
            date: "07/26/2020",
          },
          {
            leftBy: "Kelly Hodgkinson",
            date: "07/26/2020",
          },
          {
            leftBy: "Carlene Hodgkinson",
            date: "07/26/2020",
          },
          {
            leftBy: "Stephen Hodgkinson",
            date: "07/26/2020",
          },
          {
            leftBy: "Carleton Hodgkinson",
            date: "07/26/2020",
          },
          {
            leftBy: "David Hodgkinson",
            date: "07/26/2020",
          },
        ],
      },
      graveInfo: {
        stoneImg:
          "https://images.findagrave.com/photos250/photos/2019/349/192908773_526275ae-d04f-4ef7-80af-fd80f6436bfc.jpeg",
        latitude: 41.84918,
        longitude: -71.40888,
      },
    },
    {
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
      photos: {
        main: "",
        subject: [],
        family: [],
      },
      flowers: {
        details: [
          {
            leftBy: "Mom",
            date: "07/26/2020",
          },
          {
            leftBy: "Dad",
            date: "07/26/2020",
          },
          {
            leftBy: "The Hodgkinson Brothers & Sisters",
            date: "07/26/2020",
          },
        ],
      },
      graveInfo: {
        stoneImg: "",
        latitude: 41.79794,
        longitude: -71.4632739,
      },
    },
    {
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
      photos: {
        main: "",
        subject: [],
        family: [],
      },
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
      photos: {
        main: "",
        subject: [],
        family: [],
      },
      flowers: {
        details: [{ leftBy: "Robert Cahoone", date: "07/26/2020" }],
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
        showModal: action.showModal,
      };

    case "CLOSE_FB_MODAL":
      return {
        ...state,
        showFBModal: action.showFBModal,
        subjectData: {
          ...state.subjectData,
        },
      };

    case "ADD_FLOWER":
      return {
        ...state,
        showModal: action.showModal,
        showFBModal: action.showFBModal,
        subjectData: {
          ...state.subjectData,
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
          ...state.sitesData.slice(0, action.currentIndex),
          {
            ...state.sitesData[action.currentIndex],
            flowers: {
              ...state.sitesData[action.currentIndex].flowers,
              details: [
                ...state.sitesData[action.currentIndex].flowers.details,
                { leftBy: action.leftBy, date: action.date },
              ],
            },
          },
          ...state.sitesData.slice(action.currentIndex + 1),
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
        currentIndex: action.currentIndex,
        subjectData: {
          ...state.subjectData,
          flowers: action.subjectData.flowers,
          photos: action.subjectData.photos,
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
