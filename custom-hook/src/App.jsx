import React from 'react'
import useLocalStorage from './useLocalStorage'

const App = () => {
  const [value, setValue] = useLocalStorage('inputValue', '');
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      placeholder='Enter your name'/>
    </div>
  )
}

export default App