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
  sitesData: [
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
      graveInfo: {
        stoneImg:
          "https://s3.amazonaws.com/images.billiongraves.com/headstones/thumbnails/20181019/24319677.jpg?t=2018-10-22+16%3A00%3A22",
        latitude: 41.79794,
        longitude: -71.4632739,
      },
      flowers: [
        { leftBy: "Tom Hodgkinson" },
        { leftBy: "Stephen Hodgkinson" },
        { leftBy: "Carleton Hodgkinson" },
      ],
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
      graveInfo: {
        stoneImg: "",
        latitude: 41.79345,
        longitude: -71.4625964,
      },
      flowers: [{ leftBy: "Mr. Kennedy" }],
    },
    // {
    //   latitude: 41.854034,
    //   longitude: -71.381065,
    //   firstName: "Howard",
    //   middleName: "Philips",
    //   lastName: "Lovecraft",
    //   maidenName: "",
    //   birthYear: "1890",
    //   deathYear: "1937",
    // },
    // {
    //   latitude: 41.5458362,
    //   longitude: -71.5384345,
    //   firstName: "Cecelia",
    //   middleName: "M",
    //   lastName: "Blair",
    //   maidenName: "Aldrich",
    //   birthYear: "1860",
    //   deathYear: "1903",
    // },
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
