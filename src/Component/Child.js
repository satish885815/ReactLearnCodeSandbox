import { useEffect } from "react";

export const Child = () => {
  useEffect(() => {
    console.log("Effect B");
  });
  useEffect(() => {
    console.log("Effect A");
  });

  return <div>Test</div>;
};
