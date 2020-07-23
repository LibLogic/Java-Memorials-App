import React, { Component } from "react";
import { connect } from "react-redux";

class FBModal extends Component {
  render() {
    return (
      (this.props.showFBModal && (
        <div id="fb-modal">
          <div>
            <br />
            <p>Virtual Flower Left</p>
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
            <br />
            <p className="cemetery">
              {this.props.cemeteryName}
              <br />
              {this.props.city}, {this.props.state}
            </p>
          </div>
          <div className="fb-prompt">
            <p className="fb-question">Post the above Facebook?</p>
            <p className="yes">
              <input type="radio" id="yes" name="fbshare" value="Yes" />
              {/* post to fb */}
              <label htmlFor="Yes">Yes</label>
            </p>
            <p className="no">
              <input
                type="radio"
                id="no"
                name="fbshare"
                value="No"
                defaultChecked
              />
              {/* set showFBModal to false */}
              <label htmlFor="No">No</label>
            </p>
            <div>
              <button
                onClick={this.props.closeFBModal}
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
    showFBModal: state.subjectData.showFBModal,
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
