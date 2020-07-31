import { createStore } from "redux";

const initialState = {
  poems: [
    {
      title: "You'll Never Walk Alone",
      poem: `  When you walk through the storm 
Hold your head up high,
And don’t be afraid of the dark.
At the end of the storm Is a golden sky
And the sweet silver song of a lark.

Walk on through the wind, 
Walk on through the rain,
Though your dreams be tossed and blown.
Walk on, walk on with hope in your heart
And you’ll never walk alone`,
      author: "Unknown",
    },
    {
      title: "When Tomorrow Starts Without Me",
      poem: `  When tomorrow starts without me
And I’m not here to see
If the sun should rise and find your eyes
All filled with tears for me

I wish you wouldn’t cry
The way you did today
While thinking of the many things
We did not get to say

I know how much you love me
As much as I love you
Each time that you think of me
I know you will miss me too

When tomorrow starts without me
Please try to understand
That an angel came and called my name
And took me by the hand

The angel said my place was ready
In heaven far above
And that I would have to leave behind
All those I Dearly Love

But when I walked through Heaven’s Gates
I felt so much at home
When God looked down and smiled at me
From his golden throne

He said this is eternity
And all I promised you
Today for life on earth is done
But here it starts a new

I promise no tomorrow
For today will always last
And since each day’s the exact same way
There is no longing for the past

So when Tomorrow starts without me
Do not think we’re apart
For every time you think of me
Remember I’m right here in your heart`,
      author: "",
    },
    {
      title: "When God Saw You Getting Tired",
      poem: `  When God saw you getting tired
And a cure was not to be
He put his arms around you
And whispered come to me

He didn’t like what you went through
And he gave you rest
His garden must be beautiful
He only takes the best

And when we saw you sleeping
So peaceful and free from pain
We wouldn’t wish you back
To suffer that again

Today we say goodbye
And as you take your final rest
That garden must be beautiful
Because you are one of the best.`,
      author: "",
    },
    {
      title: "The Clock of Life is Wound But Once",
      poem: `  The clock of life is wound but once
And no man has the power
To tell just when the hands will stop
At late or early hour
To lose one’s wealth is sad indeed
To lose one’s health is more,
To lose one’s soul is such a loss
That no man can restore.
The present is our own,
So live love, toil with a will
Place no faith in “tomorrow,”
For the clock may then be still.`,
      author: "",
    },
  ],
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
    donors: {
      restHome: "",
      individual: ["Angelcloud Thanks You!"],
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
      donors: {
        restHome: "",
        individual: [],
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
      donors: {
        restHome: "",
        individual: [
          "Angelcloud Thanks Our Donors!",
          "Tommy Hodgkinson",
          "Kelly Hodgkinson",
          "Carlene Hodgkinson",
          "Stephen Hodgkinson",
          "Carleton Hodgkinson",
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
      donors: {
        restHome: "",
        individual: [],
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
      donors: {
        restHome: "",
        individual: [],
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
      donors: {
        restHome: "",
        individual: [],
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
          donors: action.subjectData.donors,
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
