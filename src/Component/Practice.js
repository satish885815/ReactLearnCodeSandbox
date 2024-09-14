import React, { useState } from "react";

function Practice() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const handleSetCounter1 = () => {
    setCounter1(counter1 + 1);
  };
  const handleSetCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  const isEven = () => {
    let i = 0;
    while (i < 2000000000) i++;
    return counter1 % 2 === 0;
  };

  return (
    <div>
      <h1>{counter1}</h1>
      <div>{isEven() ? "Even" : "Odd"}</div>

      <button onClick={handleSetCounter1}>click Timer {counter1}</button>
      <h1>{counter2}</h1>
      <button onClick={handleSetCounter2}>click Timer {counter2}</button>
    </div>
  );
}

export default Practice;
