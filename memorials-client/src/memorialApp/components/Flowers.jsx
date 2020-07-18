import React, { Component } from "react";
import { connect } from "react-redux";
import flower from "../images/flower.png";

class Flowers extends Component {
  render() {
    this.getFlowers();
    return (
      <table id="flower">
        <tbody>
          <tr>
            <td>
              {this.displayFlower0 && (
                <img
                  title={`Left on ${this.displayFlower0.date} 
by ${this.displayFlower0.leftBy} `}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower1 && (
                <img
                  title={`Left on ${this.displayFlower1.date} 
by ${this.displayFlower1.leftBy} `}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower2 && (
                <img
                  title={`Left on ${this.displayFlower2.date} 
by ${this.displayFlower2.leftBy} `}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower3 && (
                <img
                  title={`Left on ${this.displayFlower3.date} 
by ${this.displayFlower3.leftBy} `}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower4 && (
                <img
                  title={`Left on ${this.displayFlower4.date} 
by ${this.displayFlower4.leftBy} `}
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
                  title={`Left on ${this.displayFlower5.date} 
by ${this.displayFlower5.leftBy} `}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower6 && (
                <img
                  title={`Left on ${this.displayFlower6.date} 
by ${this.displayFlower6.leftBy} `}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower7 && (
                <img
                  title={`Left on ${this.displayFlower7.date} 
by ${this.displayFlower7.leftBy} `}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower8 && (
                <img
                  title={`Left on ${this.displayFlower8.date} 
by ${this.displayFlower8.leftBy} `}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower9 && (
                <img
                  title={`Left on ${this.displayFlower9.date} 
by ${this.displayFlower9.leftBy} `}
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
                  title={`Left on ${this.displayFlower10.date} 
by ${this.displayFlower10.leftBy} `}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower11 && (
                <img
                  title={`Left on ${this.displayFlower11.date} 
by ${this.displayFlower11.leftBy} `}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower12 && (
                <img
                  title={`Left on ${this.displayFlower12.date} 
by ${this.displayFlower12.leftBy} `}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower13 && (
                <img
                  title={`Left on ${this.displayFlower13.date} 
by ${this.displayFlower13.leftBy} `}
                  alt={"Flower"}
                  src={flower}
                />
              )}
            </td>
            <td>
              {this.displayFlower14 && (
                <img
                  title={`Left on ${this.displayFlower14.date} 
by ${this.displayFlower14.leftBy} `}
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
    for (let i = 0; i < this.props.flowers.details.length; i++) {
      let temp = "displayFlower" + i;
      this[temp] = this.props.flowers.details[i];
    }
  };
}

const mapStateToProps = (state) => {
  return {
    flowers: state.subjectData.flowers,
  };
};

export default connect(mapStateToProps)(Flowers);
