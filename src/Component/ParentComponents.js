import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };
    this.greatParent = this.greatParent.bind(this);
  }
  greatParent(name) {
    alert(`Hello ${this.state.parentName} from ${name}`);
  }
  render() {
    return <ChildComponent greatParent={this.greatParent} />;
  }
}

export default ParentComponent;
