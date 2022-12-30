import React from 'react';
import { useCounterStore } from '../stores/counterStore/counterStore';

export const Counter = () => {

    const counter = useCounterStore(state => state.count);
    const increaseCounter = useCounterStore(state => state.increaseCounter);
    const decreaseCounter = useCounterStore(state => state.decreaseCounter);

    return (
        <>
            {counter}
            <button onClick={increaseCounter}>INCREASE</button>
            <button onClick={decreaseCounter}>DECREASE</button>
        </>
    )
}