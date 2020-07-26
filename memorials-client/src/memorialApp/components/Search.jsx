import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../store";
import LocData from "./LocData";
import DummyLocData from "./DummyLocData";
import SearchDetails from "./SearchDetails";
import billionGravesService from "../api/billionGraves/billionGravesService";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResult = true;
recognition.continuous = true;

class Search extends Component {
  render(props) {
    return (
      <div className="container">
        <LocData store={store} doSearch={this.doSearch} />
        <DummyLocData store={store} />
        <div className="full-window search">
          <div id="camera-window" className="camera-window">
            Camera View
          </div>
          {!this.props.subjectData.lastName && (
            <div title="Take Photo" className="shutter-btn"></div>
          )}
          <div className="display-detail">
            <h5>
              {`${this.props.subjectData.firstName} ${this.props.subjectData.middleName}
              ${this.props.subjectData.lastName}`}{" "}
            </h5>
            {this.props.subjectData.birthYear &&
            this.props.subjectData.deathYear ? (
              <h6>{`${this.props.subjectData.birthYear} — ${this.props.subjectData.deathYear}`}</h6>
            ) : this.props.subjectData.birthYear ? (
              <h6>{`${this.props.subjectData.birthYear} — ????`}</h6>
            ) : this.props.subjectData.deathYear ? (
              <h6>{`???? — ${this.props.subjectData.deathYear}`}</h6>
            ) : (
              <h6>{""}</h6>
            )}
          </div>
          <SearchDetails
            store={store}
            getSpeech={this.getSpeech}
            doSearch={this.doSearch}
          />
        </div>
      </div>
    );
  }

  getSpeech = () => {
    recognition.start();
    recognition.onresult = (e) => {
      const speechToText = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)[0]
        .split(" ");
      if (e.results[0].isFinal) {
        recognition.stop();
      }
      let speech = speechToText.map((word) => {
        return `${word[0].toUpperCase()}${word.slice(1)}`;
      });

      let dates = [];
      if (
        !isNaN(
          speech[speech.length - 1].substring(0, 4) +
            speech[speech.length - 1].substring(5)
        )
      ) {
        dates[0] = speech[speech.length - 1].substring(0, 4);
        dates[1] = speech[speech.length - 1].substring(5);
        speech.pop();
        speech = [...speech, ...dates];
      }
      if (
        speech[speech.length - 2] === "Born" &&
        !isNaN(speech[speech.length - 1])
      ) {
        dates = [speech[speech.length - 1], ""];
        speech.splice(speech.length - 2, 1);
      } else {
        dates = speech.filter((word) => {
          return !isNaN(word);
        });
      }
      speech.splice(3);
      console.log(speech);
      let names = speech.filter((word) => {
        return (
          word !== "Born" &&
          word !== "Died" &&
          word !== "To" &&
          word !== "Two" &&
          word !== "On" &&
          isNaN(word)
        );
      });
      console.log(names);
      if (names.length === 2) {
        speech = [names[0], "", names[1]];
      }
      if (names.length === 1) {
        speech = ["", "", names[0]];
      }
      if (dates.length === 0) {
        speech = [...speech, "", ""];
      }
      if (dates.length === 1) {
        speech = [...speech, "", dates[0]];
      }
      if (dates.length === 2) {
        speech = [...speech, ...dates];
      }

      let speechSubject = {
        firstName: speech[0],
        middleName: speech[1],
        lastName: speech[2],
        birthYear: speech[3],
        deathYear: speech[4],
      };
      this.props.setSpeechData(speechSubject);
    };
  };

  doSearch = () => {
    let conductSearch = () => {
      billionGravesService
        .retreiveSubject()
        .then((response) => {
          // if (
          //   store.getState().deviceLocation.latitude ===
          //     response.data.items[0].lat.toFixed(7) &&
          //   store.getState().deviceLocation.longitude ===
          //     response.data.items[0].lon.toFixed(7)
          // ) {

          let firstName = response.data.items[0].given_names.split(" ")[0];
          firstName =
            firstName[0][0].toUpperCase() +
              firstName.substring(1).toLowerCase() || "";

          let middleName = response.data.items[0].given_names.split(" ")[1];
          middleName =
            middleName[0][0].toUpperCase() +
              middleName.substring(1).toLowerCase() || "";

          let lastName = response.data.items[0].family_names;
          lastName =
            lastName[0][0].toUpperCase() +
              lastName.substring(1).toLowerCase() || "";

          const subjectResponse = {
            siteId: store.getState().sitesData.length - 1,
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            maidenName: response.data.items[0].maiden_names,
            birthYear: response.data.items[0].birth_year,
            deathYear: response.data.items[0].death_year,
            country: response.data.items[0].cemetery_country,
            state: response.data.items[0].cemetery_state,
            city: response.data.items[0].cemetery_city,
            county: response.data.items[0].cemetery_county,
            cemeteryName: response.data.items[0].cemetery_name,
            graveInfo: {
              stoneImg: response.data.items[0].thumbnail,
              latitude: response.data.items[0].lat.toFixed(7),
              longitude: response.data.items[0].lon.toFixed(7),
            },
            flowers: {
              details: [],
            },
          };
          this.props.saveNewSiteInfo(subjectResponse);
          this.props.setSubjectInfo(subjectResponse);
          // }
        })
        .catch((response) => {
          console.log(response);
        });

      this.props.history.push("/view/main");
    };

    billionGravesService
      .retreiveSubject()
      .then((response) => {
        let found = false;
        for (let i = 0; i < store.getState().sitesData.length; i++) {
          if (
            store.getState().deviceLocation.latitude ===
              store.getState().sitesData[i].graveInfo.latitude &&
            store.getState().deviceLocation.longitude ===
              store.getState().sitesData[i].graveInfo.longitude &&
            store.getState().sitesData[i].lastName ===
              store.getState().subjectData.lastName
          ) {
            found = true;
            let siteId = i;
            let image = response.data.items[0].thumbnail;
            let siteDataResponse = { ...store.getState().sitesData[i] };
            this.props.setSubjectInfo(siteDataResponse, image, siteId);
            this.props.history.push("/view/main");
          }
        }
        if (!found) {
          conductSearch();
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };
}

const mapStateToProps = (state) => {
  return {
    speechData: {
      firstName: state.speechData.firstName,
      middleName: state.speechData.middleName,
      lastName: state.speechData.lastName,
      birthYear: state.speechData.birthYear,
      deathYear: state.speechData.deathYear,
    },
    subjectData: {
      firstName: state.subjectData.firstName,
      middleName: state.subjectData.middleName,
      lastName: state.subjectData.lastName,
      birthYear: state.subjectData.birthYear,
      deathYear: state.subjectData.deathYear,
      country: state.subjectData.country,
      state: state.subjectData.state,
      city: state.subjectData.city,
      county: state.subjectData.county,
      cemeteryName: state.subjectData.cemeteryName,
      graveInfo: {
        latitude: state.subjectData.graveInfo.latitude,
        longitude: state.subjectData.graveInfo.longitude,
      },
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveNewSiteInfo: (subjectResponse) => {
      const action = {
        type: "SAVE_NEW_SITE",
        sitesData: subjectResponse,
      };
      dispatch(action);
    },
    setSpeechData: (speechData) => {
      const action = {
        type: "SET_SPEECH_DATA",
        speechData: speechData,
      };
      dispatch(action);
    },
    setSubjectInfo: (subjectResponse, image, siteId) => {
      const action = {
        type: "SET_SUBJECT_INFO",
        subjectData: {
          ...subjectResponse,
          siteId: siteId,
          flowers: subjectResponse.flowers,
          graveInfo: {
            ...subjectResponse.graveInfo,
            stoneImg: image,
            latitude: subjectResponse.graveInfo.latitude,
            longitude: subjectResponse.graveInfo.longitude,
          },
        },
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
