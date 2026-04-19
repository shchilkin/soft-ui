import { create } from 'zustand';

interface ThemeState {
  mainColor: string;
  fontColor: string;
  lightShadow: string;
  darkShadow: string;
  setMainColor: (color: string) => void;
  setFontColor: (color: string) => void;
  setLightShadow: (color: string) => void;
  setDarkShadow: (color: string) => void;
}

interface GeneratorState {
  blur: number;
  spread: number;
  colorDifference: number;
  width: number;
  height: number;
  radius: number;
  shape: number;
  setBlur: (blur: number) => void;
  setSpread: (spread: number) => void;
  setColorDifference: (diff: number) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setRadius: (radius: number) => void;
  setShape: (shape: number) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  mainColor: '#E1E3EA',
  fontColor: '#45484d',
  lightShadow: '#ffffff',
  darkShadow: '#c0c2c8',
  setMainColor: (color) => set({ mainColor: color }),
  setFontColor: (color) => set({ fontColor: color }),
  setLightShadow: (color) => set({ lightShadow: color }),
  setDarkShadow: (color) => set({ darkShadow: color }),
}));

export const useGeneratorStore = create<GeneratorState>((set) => ({
  blur: 40,
  spread: 10,
  colorDifference: 15,
  width: 250,
  height: 250,
  radius: 30,
  shape: 1, // 1: Flat, 2: Concave, 3: Convex, 4: Pressed
  setBlur: (blur) => set({ blur }),
  setSpread: (spread) => set({ spread }),
  setColorDifference: (diff) => set({ colorDifference: diff }),
  setWidth: (width) => set({ width }),
  setHeight: (height) => set({ height }),
  setRadius: (radius) => set({ radius }),
  setShape: (shape) => set({ shape }),
}));
