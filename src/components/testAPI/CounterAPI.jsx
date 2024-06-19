import React from 'react'
import {useChange} from '../../hooks/useChange'
import { useState } from 'react';

const CounterAPI = () => {

    const [counter,handleIncrement,handleDecrement] = useChange();





  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <hr></hr>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default CounterAPI