import React, { Component } from "react";
import UpdateComponent from "./withCouter";

class HoverCounter extends Component {
  render() {
    const { name, count, handleClick } = this.props;
    return (
      <h1 onMouseOver={handleClick}>
        {name} Click {count} timer
      </h1>
    );
  }
}

export default UpdateComponent(HoverCounter, 10);
