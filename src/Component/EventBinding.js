import React, { Component } from "react";
class EventBinds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello Guys",
    };

    // this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({
      message: "Good bye",
    });
    console.log(this);
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* first way to bind the event */}
        {/* <button onClick={this.handleChange.bind(this)}>Click</button> */}
        {/* 2nd way to bind this */}
        {/* <button onClick={() => this.handleChange()}>Click</button> */}
        {/* 3rd way to bind in constructor */}
        {/* <button onClick={this.handleChange.bind(this)}>Click</button> */}
        {/* 4th way use arrow function */}
      </div>
    );
  }
}

export default EventBinds;
