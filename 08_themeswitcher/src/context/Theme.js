import React, { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// this is called custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
