import { useEffect } from "react";
import { Child } from "./Child";

export const Parent = () => {
  useEffect(() => {
    console.log("Parent A");
  });
  return (
    <div className="App">
      <Child />
    </div>
  );
};
