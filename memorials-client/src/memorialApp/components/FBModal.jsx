import React, { Component } from "react";
import { connect } from "react-redux";

class FBModal extends Component {
  render() {
    return (
      (this.props.leftBy && this.props.showFBModal && (
        <div id="fb-modal">
          <br />
          <p>Virtual Flower Left</p>
          <h6>
            In Memory Of
            <br />
            David J Hodgkinson
            <br />
            1965 - 1965
          </h6>
          <br />
          <p>
            Saint Ann Cemetery
            <br />
            Cranston, Rhode Island
          </p>
          <hr />
          <p>Post this to Facebook?</p>
          <input type="radio" id="yes" name="fbshare" value="Yes" checked />
          {/* post to fb */}
          <label htmlFor="Yes">Yes</label>
          <input type="radio" id="no" name="fbshare" value="No" />
          {/* set showFBModal to false */}
          <label htmlFor="No">No</label>
          <div>
            <button className="btn btn-sm btn-success">Submit</button>
          </div>
        </div>
      )) ||
      null
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showFBModal: state.subjectData.flowers.showFBModal,
    leftBy: state.subjectData.flowers.details[state.subjectData.siteId],
  };
};
export default connect(mapStateToProps)(FBModal);
