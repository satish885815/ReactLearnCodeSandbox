import React, { Component } from "react";
import UpdateComponent from "./withCouter";
class ClickCounter extends Component {
  render() {
    const { name, count, handleClick } = this.props;
    return (
      <button onClick={handleClick}>
        {name} Click {count} timer
      </button>
    );
  }
}

export default UpdateComponent(ClickCounter, 5);
