import React, { useMemo } from "react";

import Button from "../UI/Button";
import DarkThemeIcon from "../UI/DarkThemeIcon";
import LightThemeIcon from "../UI/LightThemeIcon";

import { useTheme } from "../../context/ThemeContext";

const ThemeSwitcher = React.memo(({ className }) => {
  // extract theme and toggleTheme function from the theme context
  const { theme, toggleTheme } = useTheme();
  // conditionally render theme icons based on 'theme' state
  const themeIcon = useMemo(() => {
    return theme === "dark" ? (
      <LightThemeIcon className="bg-white text-orange-600 shadow-md p-1 hover:shadow-amber-600 rounded-full" />
    ) : (
      <DarkThemeIcon className="bg-black text-black p-1 outline outline-2 outline-black hover:outline-5 hover:outline-orange-600 hover:shadow-md hover:shadow-white rounded-full" />
    );
  }, [theme]);

  // text for the theme switch button tooltip
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <Button
      className={className}
      title={`Switch to ${nextTheme} theme`}
      aria-label={`Switch to ${nextTheme} theme`}
      onClick={toggleTheme}
    >
      {themeIcon}
    </Button>
  );
});

export default ThemeSwitcher;
