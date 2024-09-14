import React, { Component } from "react";

const UpdateComponent = (OriginalComponent, incementNumber) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    handleClick = () => {
      this.setState((prevState) => ({
        count: prevState.count + incementNumber,
      }));
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          handleClick={this.handleClick}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdateComponent;
