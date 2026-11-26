import { createContext } from "react";

export type ThemeType = "light" | "dark";

export type ThemeContextType = {
    theme: ThemeType;
    onChangeTheme: VoidFunction; // () => void
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
