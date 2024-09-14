import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("RegComp");
    return <div>Regular Components {this.props.name}</div>;
  }
}

export default RegComp;
