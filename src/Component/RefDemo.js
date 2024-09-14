import React, { Component } from "react";

class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    // this.inputRef.current.focus();
  }
  handleClick = () => {
    // alert(this.inputRef.current.value);
    alert(this.cbRef.value);
  };
  render() {
    return (
      <div>
        <h1>Ref Demo</h1>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default RefDemo;
