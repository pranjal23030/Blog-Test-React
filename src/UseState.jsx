import { useState } from "react";

function UseState() {
  var count = 0;
  const increaseCount = () => {
    count = count + 1;
    console.log(count);
  };

  const decreaseCount = () => {
    count = count - 1;
    console.log(count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </>
  );
}

export default UseState;
