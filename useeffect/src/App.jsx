import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  //what is useEffect Hook ==> useEffect is a hook that allows you to perform side effects in function components. It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount in class components.  useEffect is a function that takes two arguments: a callback function and an array of dependencies. The callback function is called every time the component mounts, updates, or unmounts. The array of dependencies is used to determine when the callback function should be called. If the array of dependencies is empty, the callback function is called every time the component mounts or updates. If the array of dependencies is not empty, the callback function is called only when one of the dependencies changes.

  //useEffect(callback, dependencies)
  //callback: A function that will be called after the component renders.
  //dependencies: An array of values that the effect depends on. If any of the values in the array change, the effect will be called again.
  //useEffect is called after the component mounts and whenever the dependencies change.

  useEffect(() => {
    // console.log("use effect component render");
    return () => {
      console.log("use effect component unmount");
    };
  }, []);

  // useEffect(() => {
  //   if (count == 3) {
  //     console.log("use effect component unmount");
  //   }
  // }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default App;
