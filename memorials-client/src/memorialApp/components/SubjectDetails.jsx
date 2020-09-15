import React, { Component } from "react";
import { connect } from "react-redux";

class SubjectDetails extends Component {
  render(props) {
    return (
      <div className="display-details">
        {this.props.subjectData.cemeteryCity &&
          this.props.subjectData.lastName && (
            <div>
              <h5>
                {`${this.props.subjectData.firstName} ${this.props.subjectData.middleName}
          ${this.props.subjectData.lastName}`}
                {this.props.subjectData.maidenName && (
                  <span>{` (${this.props.subjectData.maidenName})`}</span>
                )}
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
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    subjectData: {
      ...state.subjectData,
      // graveInfo: {
      // ...state.subjectData.graveInfo,
      // latitude: state.subjectData.latitude,
      // longitude: state.subjectData.longitude,
      // },
    },
  };
};

export default connect(mapStateToProps)(SubjectDetails);
