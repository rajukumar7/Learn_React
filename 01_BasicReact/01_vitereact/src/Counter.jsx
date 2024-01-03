import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // in useState second like setCount stguments is called method and it also give a callback
  const increase = () => {
    if (count < 20) {
      // this techniques not increase initail value by 4, its increase normal 1 by on1
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);

      //  this technique is directly increase value by 4 from initial value
      // setCount((prevCount) => prevCount + 1);
      // setCount((prevCount) => prevCount + 1);
      // setCount((prevCount) => prevCount + 1);
      // setCount((prevCount) => prevCount + 1);
    } else {
      alert("limit acceed");
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("count value can not be in negative");
    }
  };

  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count value: {count}</h3>
      <button onClick={increase}>+</button> &nbsp;
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Counter;
