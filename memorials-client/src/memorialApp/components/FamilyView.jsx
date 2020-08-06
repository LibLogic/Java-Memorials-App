import React, { Component } from "react";

class FamilyView extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="family-view-window">
          <div className="parents">
            <h3 className="mother">Family of Tom</h3>
            <h5 className="mother">Mother</h5>
            <h5 className="father">Father</h5>
          </div>
          <ul className="siblings">
            SIBLINGS
            <li className="child">Catherine</li>
            <li className="child">
              <i>--- Thomas--- </i>
            </li>
            <li className="child">Earl</li>
            <li className="child">Daniel</li>
            <li className="child">John</li>
            <li className="child">Marcia</li>
          </ul>
          <ul className="half-siblings">
            HALF SIBLINGS
            <li className="child">unkown</li>
            <li className="child">unknown</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FamilyView;
