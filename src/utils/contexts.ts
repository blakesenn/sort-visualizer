import { createContext } from "react";

export type ColorModeContextType = {
  isDarkMode: boolean;
  toggleMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextType>(null);
