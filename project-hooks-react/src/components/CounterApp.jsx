import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterApp = () => {
    const val = 5;
    const { counter, increment, reset, decrement } = useCounter(0);
    return (
        <>
            <h1>Counter:</h1>
            <h4>{counter}</h4>
            <button className='btn btn-primary' onClick={() => increment(val)}>+{val}</button>
            <button className='btn btn-danger mx-3' onClick={() => reset()}>reset</button>
            <button className='btn btn-primary' onClick={() => decrement(val, false)}>-{val}</button>
        </>
    )
}
