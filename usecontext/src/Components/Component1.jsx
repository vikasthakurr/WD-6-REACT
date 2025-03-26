import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../Context/Context'

const Component1 = () => {
    const counter = useContext(CounterContext)
  return (
    <div>
    {counter}
        
    </div>
  )
}

export default Component1