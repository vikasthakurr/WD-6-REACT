import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [count, setCount] = useState(1);
  // let a = 0;

    let val = useRef(0);
  //  const btnRef = useRef();
  // console.log(val);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    // a = a + 1;
    // console.log(a);
    val.current += 1;
    console.log(val.current);
  }, [count]);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleIncrement}>count is {count} and {val.current}</button>
        
      </div>
    </>
  );
}

export default App;
