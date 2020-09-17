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
  showFlowerModal: false,
  showDonorModal: false,
  showFBModal: false,
  speechData: {
    firstName: "",
    middleName: "",
    lastName: "",
    birthYear: "",
    deathYear: "",
  },
  subjectData: {
    siteIndex: null,
    burialId: null,
    headStonePhoto: null,

    firstName: "",
    middleName: "",
    lastName: "",
    maidenName: "",
    birthYear: "",
    deathYear: "",
    cemeteryCity: "",
    cemeteryState: "",
    cemeteryCounty: "",
    cemeteryCountry: "",
    cemeteryName: "",
    photos: {
      photo: null,
      subjectPhotos: [],
      familyPhotos: [],
    },
    parents: {
      mother: null,
      father: null,
      fullChildren: [],
      halfChildren: [],
    },
    sponsors: {
      sponsor: null,
      donors: [],
    },
    flowers: [],
  },
  deviceLocation: {
    latitude: 0,
    longitude: 0,
    cemeteryCity: "",
    cemeteryState: "",
    cemeteryCounty: "",
    cemeteryCountry: "",
  },
  sites: [
    {
      id: 1,
      stoneImg: "image1.jpg",
      latitude: 41.84918,
      longitude: -71.40888,
      burials: [
        {
          firstName: "Thomas",
          middleName: "Joseph",
          lastName: "Hodgkinson",
          maidenName: null,
          birthYear: "1938",
          deathYear: "2018",
          cemeteryCity: "Providence",
          cemeteryState: "Rhode Island",
          cemeteryCounty: "Providence",
          cemeteryCountry: "United States",
          cemeteryName: "North Burial Ground",
          photos: {
            photo: null,
            subjectPhotos: [],
            familyPhotos: [],
          },
          parents: {
            mother: null,
            father: null,
            fullChildren: [],
            halfChildren: [],
          },
          sponsors: {
            sponsor: null,
            donors: [],
          },
          flowers: [],
        },
        {
          firstName: "Carleton",
          middleName: "Everett",
          lastName: "Hodgkinson",
          maidenName: null,
          birthYear: "1906",
          deathYear: "1962",
          cemeteryCity: "Providence",
          cemeteryState: "Rhode Island",
          cemeteryCounty: "Providence",
          cemeteryCountry: "United States",
          cemeteryName: "North Burial Ground",
          photos: {
            photo: null,
            subjectPhotos: [],
            familyPhotos: [],
          },
          parents: {
            mother: null,
            father: null,
            fullChildren: [],
            halfChildren: [],
          },
          sponsors: {
            sponsor: null,
            donors: [],
          },
          flowers: [],
        },
        {
          firstName: "Catherine",
          middleName: "Rita",
          lastName: "Hodgkinson",
          maidenName: "Kelly",
          birthYear: "1908",
          deathYear: "2005",
          cemeteryCity: "Providence",
          cemeteryState: "Rhode Island",
          cemeteryCounty: "Providence",
          cemeteryCountry: "United States",
          cemeteryName: "North Burial Ground",
          photos: {
            photo: null,
            subjectPhotos: [],
            familyPhotos: [],
          },
          parents: {
            mother: null,
            father: null,
            fullChildren: [],
            halfChildren: [],
          },
          sponsors: {
            sponsor: null,
            donors: [],
          },
          flowers: [],
        },
      ],
    },
    {
      id: 2,
      stoneImg: "image1.jpg",
      latitude: 41.79794,
      longitude: -71.46327,
      burials: [
        {
          firstName: "Elizabeth",
          middleName: "Constance",
          lastName: "Donnelly",
          maidenName: "Moore",
          birthYear: "1939",
          deathYear: "2001",
          cemeteryCity: "Cranston",
          cemeteryState: "Rhode Island",
          cemeteryCounty: "Providence",
          cemeteryCountry: "United States",
          cemeteryName: "Saint Ann Cemetery",
          photos: {
            photo: null,
            subjectPhotos: [],
            familyPhotos: [],
          },
          parents: {
            mother: null,
            father: null,
            fullChildren: [],
            halfChildren: [],
          },
          sponsors: {
            sponsor: null,
            donors: [],
          },
          flowers: [],
        },
        {
          firstName: "David",
          middleName: "Joseph",
          lastName: "Hodgkinson",
          maidenName: "",
          birthYear: "1965",
          deathYear: "1965",
          cemeteryCity: "Cranston",
          cemeteryState: "Rhode Island",
          cemeteryCounty: "Providence",
          cemeteryCountry: "United States",
          cemeteryName: "Saint Ann Cemetery",
          photos: {
            photo: null,
            subjectPhotos: [],
            familyPhotos: [],
          },
          parents: {
            mother: null,
            father: null,
            fullChildren: [],
            halfChildren: [],
          },
          sponsors: {
            sponsor: null,
            donors: [],
          },
          flowers: [],
        },
      ],
    },
    {
      id: 3,
      stoneImg: "image1.jpg",
      latitude: 41.79345,
      longitude: -71.46259,
      burials: [
        {
          firstName: "Amos",
          middleName: "H",
          lastName: "Kennedy",
          maidenName: "",
          birthYear: "1907",
          deathYear: "1966",
          cemeteryCity: "Cranston",
          cemeteryState: "Rhode Island",
          cemeteryCounty: "Providence",
          cemeteryCountry: "United States",
          cemeteryName: "Saint Ann Cemetery",
          photos: {
            photo: null,
            subjectPhotos: [],
            familyPhotos: [],
          },
          parents: {
            mother: null,
            father: null,
            fullChildren: [],
            halfChildren: [],
          },
          sponsors: {
            sponsor: null,
            donors: [],
          },
          flowers: [],
        },
      ],
    },
    {
      id: 4,
      stoneImg: "image1.jpg",
      latitude: 41.5815,
      longitude: -71.55836,
      burials: [
        {
          firstName: "Mercy",
          middleName: "L",
          lastName: "Brown",
          maidenName: "",
          birthYear: "1873",
          deathYear: "1892",
          cemeteryCity: "Exeter",
          cemeteryState: "Rhode Island",
          cemeteryCounty: "Washington County",
          cemeteryCountry: "United States",
          cemeteryName: "Chestnut Hill Cemetery",
          photos: {
            photo: null,
            subjectPhotos: [],
            familyPhotos: [],
          },
          parents: {
            mother: null,
            father: null,
            fullChildren: [],
            halfChildren: [],
          },
          sponsors: {
            sponsor: null,
            donors: [],
          },
          flowers: [],
        },
      ],
    },
    {
      id: 5,
      stoneImg: "image1.jpg",
      latitude: 41.68649,
      longitude: -71.51888,
      burials: [
        {
          firstName: "Sarah",
          middleName: "F",
          lastName: "Hankinson",
          maidenName: "Cahoone",
          birthYear: "1889",
          deathYear: "1978",
          cemeteryCity: "West Warwick",
          cemeteryState: "Rhode Island",
          cemeteryCounty: "Kent County",
          cemeteryCountry: "United States",
          cemeteryName: "Saint Mary Cemetery",
          photos: {
            photo: null,
            subjectPhotos: [],
            familyPhotos: [],
          },
          parents: {
            mother: null,
            father: null,
            fullChildren: [],
            halfChildren: [],
          },
          sponsors: {
            sponsor: null,
            donors: [],
          },
          flowers: [],
        },
      ],
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

    case "OPEN_FLOWER_MODAL":
      return {
        ...state,
        showFlowerModal: action.showFlowerModal,
      };

    case "CLOSE_FLOWER_MODAL":
      return {
        ...state,
        showFlowerModal: action.showFlowerModal,
      };

    case "OPEN_DONOR_MODAL":
      return {
        ...state,
        showDonorModal: action.showDonorModal,
      };

    case "CLOSE_DONOR_MODAL":
      return {
        ...state,
        showDonorModal: action.showDonorModal,
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
        showFlowerModal: action.showFlowerModal,
        showFBModal: action.showFBModal,
        subjectData: {
          ...state.subjectData,
          flowers: [
            ...state.subjectData.flowers,
            {
              leftBy: action.leftBy,
              date: action.date,
            },
          ],
        },
      };
    case "ADD_DONOR":
      return {
        ...state,
        showDonorModal: action.showDonorModal,
        subjectData: {
          ...state.subjectData,
          sponsors: {
            ...state.subjectData.sponsors,
            sponsor: state.subjectData.sponsors.sponsor,
            donors: [
              ...state.subjectData.sponsors.donors,
              {
                donor: action.donor,
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
          cemeteryCity: action.deviceLocation.cemeteryCity,
          cemeteryState: action.deviceLocation.cemeteryState,
          cemeteryCounty: action.deviceLocation.cemeteryCounty,
          cemeteryCountry: action.deviceLocation.cemeteryCountry,
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
        },
      };

    case "SAVE_NEW_SITE":
      return {
        ...state,
        sites: [...state.sites, action.sites],
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
          siteIndex: action.subjectData.siteIndex,
          burialId: action.subjectData.burialId,
          headStonePhoto: action.subjectData.headStonePhoto,
          firstName: action.subjectData.firstName,
          middleName: action.subjectData.middleName,
          lastName: action.subjectData.lastName,
          maidenName: action.subjectData.maidenName,
          birthYear: action.subjectData.birthYear,
          deathYear: action.subjectData.deathYear,
          cemeteryCity: action.subjectData.cemeteryCity,
          cemeteryState: action.subjectData.cemeteryState,
          cemeteryCounty: action.subjectData.cemeteryCounty,
          cemeteryCountry: action.subjectData.cemeteryCountry,
          cemeteryName: action.subjectData.cemeteryName,

          flowers: action.subjectData.flowers,
          photos: action.subjectData.photos,
          parents: action.subjectData.parents,
          sponsors: action.subjectData.sponsors,
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
        },
        deviceLocation: {
          ...state.deviceLocation,
          latitude: action.latitude,
          longitude: action.longitude,
          cemeteryCity: action.cemeteryCity,
          cemeteryState: action.cemeteryState,
          cemeteryCounty: action.cemeteryCounty,
          cemeteryCountry: action.cemeteryCountry,
        },
      };

    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);
