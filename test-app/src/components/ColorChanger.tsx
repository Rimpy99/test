import React from 'react';
import { useColorStore } from '../stores/colorStore/colorStore';

export const ColorChanger = () => {
    
    const color = useColorStore(state => state.color);
    const changeColor = useColorStore(state => state.changeColor);

    return (
        <>
            <button onClick={() => changeColor('green')}>GREEN</button>
            <button onClick={() => changeColor('orange')}>ORANGE</button>
            <button onClick={() => changeColor('pink')}>PINK</button>
        </>
    )
}