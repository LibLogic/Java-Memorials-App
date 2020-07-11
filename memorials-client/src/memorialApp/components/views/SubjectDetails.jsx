import React, { Component } from "react";
import { connect } from "react-redux";

class SubjectDetails extends Component {
  render(props) {
    return (
      <div>
        <div className="display-details">
          {this.props.subjectData.city && (
            <div>
              <h5>
                {`${this.props.subjectData.firstName} ${this.props.subjectData.middleName}
          ${this.props.subjectData.lastName}`}
                {`${this.props.subjectData.maidenName}`}
              </h5>
              {this.props.subjectData.birthYear &&
              this.props.subjectData.deathYear ? (
                <h6>{`${this.props.subjectData.birthYear} — ${this.props.subjectData.deathYear}`}</h6>
              ) : this.props.subjectData.birthYear ? (
                <h6>{`${this.props.subjectData.birthYear} — Living`}</h6>
              ) : (
                <h6>{""}</h6>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

class SmallSubjectDetails extends Component {
  render() {
    return (
      <div>
        {/* <div className="container small-details-btn">Details</div> */}
        <div className="display-details-sm">
          <h5>{`${this.props.subjectData.firstName} 
            ${this.props.subjectData.lastName}s'`}</h5>
          {/* {this.props.subjectData.birthYear &&
          this.props.subjectData.deathYear ? (
            <h6>{`${this.props.subjectData.birthYear} — ${this.props.subjectData.deathYear}`}</h6>
          ) : this.props.subjectData.birthYear ? (
            <h6>{`${this.props.subjectData.birthYear} — Living`}</h6>
          ) : (
            <h6>{""}</h6>
          )} */}
          {/* <button className="btn btn-sm btn-success">Edit</button> */}
        </div>

        {/* <div className="container small-details-btn">Details</div> */}
        <div className="edit-details-sm">
          <form id="edit-form">
            <fieldset className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
              />
            </fieldset>
            <fieldset className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Birth"
                name="birth"
              />
            </fieldset>
            <fieldset className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Death"
                name="death"
              />
            </fieldset>
            <button className="btn btn-sm btn-success">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    subjectData: Object.assign({}, state.subjectData, {
      graveInfo: Object.assign({}, state.subjectData.graveInfo, {
        latitude: state.subjectData.graveInfo.latitude,
        longitude: state.subjectData.graveInfo.longitude,
      }),
    }),
  };
};

export default {
  SubjectDetails: connect(mapStateToProps)(SubjectDetails),
  SmallSubjectDetails: connect(mapStateToProps)(SmallSubjectDetails),
};
