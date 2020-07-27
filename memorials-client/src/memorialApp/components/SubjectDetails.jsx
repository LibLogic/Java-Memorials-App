import React, { Component } from "react";
import { connect } from "react-redux";

class SubjectDetails extends Component {
  render(props) {
    return (
      <div
        onDoubleClick={() => console.log("double clicked")}
        className="display-details"
      >
        {this.props.subjectData.city && this.props.subjectData.lastName && (
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
              <h6>{`${this.props.subjectData.birthYear} — ????`}</h6>
            ) : this.props.subjectData.deathYear ? (
              <h6>{`???? — ${this.props.subjectData.deathYear}`}</h6>
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
      graveInfo: {
        ...state.subjectData.graveInfo,
        latitude: state.subjectData.graveInfo.latitude,
        longitude: state.subjectData.graveInfo.longitude,
      },
    },
  };
};

export default connect(mapStateToProps)(SubjectDetails);
