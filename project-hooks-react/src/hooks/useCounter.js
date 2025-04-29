import { useState } from 'react'

export const useCounter = (initialCounter = 0) => {

    const [counter, setCounter] = useState(initialCounter);

    const increment = (val = 1) => {
        setCounter(counter + val);
    }

    const decrement = (val = 1, allowNegative = true) => {
        if (!allowNegative && counter < 1) return;
        setCounter(counter - val);
    }

    const reset = () => {
        setCounter(initialCounter);
    }

    return {
        counter,
        increment,
        reset,
        decrement
    }
}
