import React, { Component } from "react";
import { connect } from "react-redux";

class Poems extends Component {
  render() {
    return (
      <div className="poem">
        <h6>{this.props.title}</h6>
        <p>{`${this.props.poem}`}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let rand = Math.floor(Math.random() * state.poems.length);
  return {
    title: state.poems[rand].title,
    poem: state.poems[rand].poem,
    author: state.poems[rand].author,
    donor: state.subjectData.donors.individual[0],
  };
};

export default connect(mapStateToProps)(Poems);
