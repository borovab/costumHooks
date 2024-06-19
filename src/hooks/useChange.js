import React from 'react'
import { useState } from 'react';

const useChange = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {

        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

  return [counter,handleIncrement,handleDecrement]
}

export {useChange}