import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { CounterContext } from './Context/Context'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterContext.Provider value={count}>
      <Navbar  />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </CounterContext.Provider>
    </>
  )
}

export default App
