import React, { Component } from "react";
import { connect } from "react-redux";

class Modal extends Component {
  render() {
    return (
      (this.props.showModal && (
        <div id="flowerModal">
          <input
            type="text"
            placeholder="Enter First & Last Name"
            onChange={this.props.handleChange}
            value={this.props.leftBy}
          />
          <button onClick={this.props.addFlower}>ok</button>
        </div>
      )) ||
      null
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showModal: state.subjectData.flowers.showModal,
  };
};

export default connect(mapStateToProps)(Modal);
