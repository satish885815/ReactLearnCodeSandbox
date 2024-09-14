import React, { Component, useContext } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";
import { ChannelContext } from "../App";

// class ComponentE extends Component {
//   // static contextType = UserContext;
//   render() {
//     return (
//       <div>
//         {/* This is E context {this.context} */}
//         {/* <ComponentF /> */}

//       </div>
//     );
//   }
// }

// ComponentE.contextType = UserContext;
function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user}-{channel}
    </div>
  );
}

export default ComponentE;
