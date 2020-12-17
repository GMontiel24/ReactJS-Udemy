import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with hook: {state} </h1>
            <hr />

            <button className="btn" onClick={() => increment(2)}> + 1</button>
            <button className="btn" onClick={() => decrement(2)}> - 1</button>
            <button className="btn" onClick={reset}>Reset</button>
        </>
    )
}
