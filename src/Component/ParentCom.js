import React, { Component, PureComponent } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Satish",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Satish",
      });
    }, 2000);
  }

  render() {
    console.log("******ParentComp**********");
    return (
      <div>
        <h1>Parent Component</h1>
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
