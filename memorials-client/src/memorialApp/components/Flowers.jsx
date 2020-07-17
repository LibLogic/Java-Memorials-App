import React, { Component } from "react";
import { connect } from "react-redux";
import flower from "../images/flower.png";

class Flowers extends Component {
  render() {
    //  let displayFlower0 = false;
    // displayFlower1 = false,
    // displayFlower2 = false,
    // displayFlower3 = false,
    // displayFlower4 = false,
    // displayFlower5 = false,
    // displayFlower6 = false,
    // displayFlower7 = false,
    // displayFlower8 = false,
    // displayFlower9 = false,
    // displayFlower10 = false,
    // displayFlower11 = false,
    // displayFlower12 = false,
    // displayFlower13 = false,
    // displayFlower14 = false;
    this.getFlowers();
    return (
      <table id="flower">
        <tbody>
          <tr>
            <td>
              {this.displayFlower0 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower0}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower1 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower1}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower2 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower2}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower3 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower3}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower4 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower4}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
          </tr>
          <tr>
            <td>
              {this.displayFlower5 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower5}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower6 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower6}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower7 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower7}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower8 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower8}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower9 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower9}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
          </tr>
          <tr>
            <td>
              {this.displayFlower10 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower10}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower11 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower11}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower12 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower12}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower13 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower13}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower14 && (
                <img
                  title={`Flower left by: 
                  ${this.displayFlower14}`}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  getFlowers = () => {
    for (let i = 0; i < 15; i++) {
      let temp = "displayFlower" + i;
      this[temp] = false;
    }
    for (let i = 0; i < this.props.flowers.length; i++) {
      let temp = "displayFlower" + i;
      this[temp] = this.props.flowers[i].leftBy;
    }
  };
}

const mapStateToProps = (state) => {
  return {
    flowers: state.sitesData[0].flowers,
  };
};

export default connect(mapStateToProps)(Flowers);
