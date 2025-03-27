import React from "react";
import { useState,useMemo} from "react";
import "./App.css";

const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

const App = () => {
  const [number, setNumber] = useState(30); // Default to calculating Fibonacci for 30
  const [otherState, setOtherState] = useState(0); // Other unrelated state to trigger renders

  // Memoize the Fibonacci calculation to avoid recalculating on every render
   const memoizedFibResult = useMemo(() => fib(number), [number]);

  // Expensive computation without useMemo
  // const fibResult = fib(number);

  return (
    <div>
      <div>
        <p>
          <strong>Fibonacci of {number}:</strong> {memoizedFibResult}
        </p>
      </div>

      <div>
        <button onClick={() => setNumber(number + 1)}>
          Increase Fibonacci number
        </button>
      </div>

      <div>
        <p>Some other state: {otherState}</p>
        <button onClick={() => setOtherState(otherState + 1)}>
          Change other state
        </button>
      </div>
    </div>
  );
};
export default App;
