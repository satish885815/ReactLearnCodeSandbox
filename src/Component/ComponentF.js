import React, { Component } from "react";
import { UserConsumer } from "./userContext";
import { ChannelContext } from "../App";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(name) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User Context Value {name}, Channel Context Value {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
