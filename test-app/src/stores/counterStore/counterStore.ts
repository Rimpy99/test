import create from 'zustand';

type CounterType = {
    count: number,
    increaseCounter: () => void,
    decreaseCounter: () => void,
}

export const useCounterStore = create<CounterType>((set) => ({
    count: 0,
    increaseCounter: () => set(state => ({ count: state.count + 1 })),
    decreaseCounter: () => set(state => ({ count: state.count - 1 })),
}))