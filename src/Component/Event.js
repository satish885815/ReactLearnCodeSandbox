import React from "react";
function Event() {
  function handleClick() {
    console.log("Button Clicked");
  }
  return <button onClick={handleClick}>Click</button>;
}

export default Event;
