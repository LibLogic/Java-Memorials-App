import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../store";
import LocData from "./LocData";
import DummyLocData from "./DummyLocData";
import SearchDetails from "./SearchDetails";
import AngelCloudService from "../api/angelCloud/AngelCloudService";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResult = true;
recognition.continuous = true;

class Browse extends Component {
  constructor() {
    super();

    this.state = {
      disabled: false,
    };
  }
  render(props) {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <LocData
          store={store}
          doSearch={this.doSearch}
          enableRecordButton={this.enableRecordButton}
          color={this.state.color}
        />
        <DummyLocData
          store={store}
          disableRecordButton={this.disableRecordButton}
        />
        <div className="full-window search">
          <div id="camera-window" className="camera-window">
            Camera View
          </div>
          {!this.props.subjectData.firstName &&
            !this.props.subjectData.middleName &&
            !this.props.subjectData.lastName &&
            !this.props.subjectData.birthYear &&
            !this.props.subjectData.deathYear && (
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
              <h6>{`Born ${this.props.subjectData.birthYear}`}</h6>
            ) : this.props.subjectData.deathYear ? (
              <h6>{`Died ${this.props.subjectData.deathYear}`}</h6>
            ) : (
              <h6>{""}</h6>
            )}
          </div>
          <SearchDetails
            store={store}
            getSpeech={this.getSpeech}
            doSearch={this.doSearch}
            disabled={this.state.disabled}
          />
        </div>
      </div>
    );
  }

  getSpeech = () => {
    this.disableRecordButton();
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
        speech[speech.length - 1].length === 9 &&
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
      this.enableRecordButton();
    };
  };

  disableRecordButton = () => {
    this.setState({
      disabled: true,
    });
  };

  enableRecordButton = () => {
    this.setState({
      disabled: false,
    });
  };

  doSearch = () => {
    AngelCloudService.findSiteByLocation(
      store.getState().deviceLocation.latitude,
      store.getState().deviceLocation.longitude
    )
      .then((response) => {
        let siteIndex = response.data.id;
        let burialId = response.data.burials[0].id;
        let headStonePhoto = response.data.stoneImg;

        let siteDataResponse = {
          siteIndex,
          burialId,
          headStonePhoto,
          ...response.data.burials[0],
        };
        this.props.setSubjectInfo(siteDataResponse);
        this.props.history.push("/view/main");
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
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveNewSiteInfo: (subjectResponse) => {
      const action = {
        type: "SAVE_NEW_SITE",
        sites: subjectResponse,
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
    setSubjectInfo: (subjectDataResponse) => {
      const action = {
        type: "SET_SUBJECT_INFO",
        subjectData: {
          ...subjectDataResponse,
          flowers: [...subjectDataResponse.flowers],
          sponsors: {
            ...subjectDataResponse.sponsors,
            donors: [...subjectDataResponse.sponsors.donors],
          },
          photos: {
            ...subjectDataResponse.photos,
            photo: subjectDataResponse.photos.photo,
            subjectPhotos: [...subjectDataResponse.photos.subjectPhotos],
            familyPhotos: [...subjectDataResponse.photos.familyPhotos],
          },
          parents: {
            ...subjectDataResponse.parents,
            mother: subjectDataResponse.parents.mother,
            father: subjectDataResponse.parents.father,
            fullChildren: [...subjectDataResponse.parents.fullChildren],
            halfChildren: [...subjectDataResponse.parents.halfChildren],
          },
        },
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
