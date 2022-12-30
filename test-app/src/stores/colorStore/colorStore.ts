import create from 'zustand';

type ColorType = {
    color: string,
    changeColor: (newColor: string) => void,
}

export const useColorStore = create<ColorType>((set) => ({
    color: '',
    changeColor: (newColor: string) => set({ color: newColor })
}))