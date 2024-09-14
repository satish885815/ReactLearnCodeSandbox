import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  clickHandler = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    const { count } = this.state;
    return <div>{this.props.render(count, this.clickHandler)}</div>;
  }
}

export default Counter;
