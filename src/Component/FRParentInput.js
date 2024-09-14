import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParentinput extends Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
  }
  handleClick = () => {
    this.parentRef.current.focus();
    alert(this.parentRef.current.value);
  };
  render() {
    return (
      <div>
        <FRInput ref={this.parentRef} />
        <button onClick={this.handleClick}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentinput;
