import React, { Component } from "react";

class ClickCOunterTwo extends Component {
  render() {
    const { count, clickHandler } = this.props;
    return <button onClick={clickHandler}>Clicked {count} times</button>;
  }
}

export default ClickCOunterTwo;
