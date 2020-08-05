import React, { Component } from "react";
import { connect } from "react-redux";
import flower from "../images/flower.png";

class FBModal extends Component {
  render() {
    return (
      (this.props.showFBModal && (
        <div
          id="fb-modal"
          title={`Left on ${this.props.leftBy.date} 
by ${this.props.leftBy.leftBy} `}
        >
          <div>
            <br />
            <p>
              A Virtual Flower{"  "}
              <img style={{ width: "22%" }} alt="Flower" src={flower}></img>
            </p>

            <h6 className="fb-memorial">
              In Memory Of
              <br />
              {this.props.firstName} {this.props.middleName[0]}{" "}
              {this.props.lastName}
              {this.props.maidenName && (
                <span>{` (${this.props.maidenName})`}</span>
              )}
              <br />
              {this.props.birthYear} - {this.props.deathYear}
            </h6>
            <p className="cemetery">
              <br />
              {this.props.cemeteryName}
            </p>
          </div>
          <div className="fb-prompt">
            <p className="fb-question">Post the above Facebook?</p>
            <p className="yes">
              <input type="radio" name="fbshare" value="yes" defaultChecked />{" "}
              <label htmlFor="Yes">Yes</label>{" "}
            </p>
            <p className="no">
              <input type="radio" name="fbshare" value="no" />{" "}
              <label htmlFor="No">No</label>{" "}
            </p>
            <div>
              <button
                onClick={this.FBPostChoice}
                className="btn btn-sm btn-success"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )) ||
      null
    );
  }

  FBPostChoice = () => {
    const radioBtns = document.querySelectorAll('input[name="fbshare"]');
    let selectedValue;
    for (const radioBtn of radioBtns) {
      if (radioBtn.checked) {
        selectedValue = radioBtn.value;
        break;
      }
    }
    if (selectedValue === "yes") {
      this.postToFaceBook();
    } else {
      this.props.closeFBModal();
    }
  };

  postToFaceBook = () => {
    console.log("posting to facebook");
    this.props.closeFBModal();
  };
}

const mapStateToProps = (state) => {
  return {
    firstName: state.subjectData.firstName,
    middleName: state.subjectData.middleName,
    lastName: state.subjectData.lastName,
    maidenName: state.subjectData.maidenName,
    birthYear: state.subjectData.birthYear,
    deathYear: state.subjectData.deathYear,
    cemeteryName: state.subjectData.cemeteryName,
    city: state.subjectData.city,
    state: state.subjectData.state,
    showFBModal: state.showFBModal,
    leftBy:
      state.subjectData.flowers.details[
        state.subjectData.flowers.details.length - 1
      ],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeFBModal: () => {
      const action = {
        type: "CLOSE_FB_MODAL",
        showFBModal: false,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FBModal);
