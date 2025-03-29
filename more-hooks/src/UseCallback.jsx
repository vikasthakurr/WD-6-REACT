import React from "react";
import { useState,useCallback } from "react";
import Child from "./Child";
const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleIncrement1 = () => {
    setCount1(count1 + 1);
  };

  const memoVal = useCallback(handleIncrement, [count1]);

  return (
    <>
      <h1>count:{count}</h1>
      <button onClick={handleIncrement}>Increment</button>

      <br />
      <br />
      <h1>count1:{count1}</h1>
      <button onClick={handleIncrement1}>Increment1</button>

      <br />
      <br />
  {/* const memoVal = useCallback(handleIncrement, []); */}
      <Child count = {count1} Increment= {memoVal}/>
    </>
  );
};

export default UseCallback;
