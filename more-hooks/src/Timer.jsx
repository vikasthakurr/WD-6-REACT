import React from "react";
import { useState, useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  let timeRef= useRef(null)

  const startTimer = () => {
     timeRef.current=setInterval(() => {
      setTime(time=>time + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timeRef.current);

  };

  const resetTimer = () => {
    setTime(0);
  };
  return (
    <div>
      <h1>Timer :{time} Second</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
