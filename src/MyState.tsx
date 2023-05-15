import React, { useState } from "react";

function MyState() {
  let [counter, setCounter] = useState(0);

  const handleMinus = () => {
    setCounter((prevCount: number) => (prevCount = prevCount - 1));
  };

  /*   const handlePlus = () => {
    counter = counter + 1;
    setCounter(counter);
  }; */

  return (
    <div>
      <button onClick={handleMinus}> - </button>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((prevCount: number) => prevCount + 1);
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default MyState;
