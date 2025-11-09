import { createContext, useContext, useCallback } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Fallback to system preference ONLY if no value in localStorage
  const getInitialTheme = () => {
    if (typeof window === "undefined") return "dark";

    const stored = localStorage.getItem("theme");
    if (stored) return JSON.parse(stored);

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  };
  // extract from a custom hook
  const [theme, setTheme] = useLocalStorage("theme", getInitialTheme());

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
