import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch (err) {
      console.warn("Error reading localStorage", err);
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(key);
      const parsedStored = stored ? JSON.parse(stored) : null;
      // Only update if value has changed
      if (JSON.stringify(parsedStored) !== JSON.stringify(value)) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (err) {
      console.warn("Error setting localStorage", err);
    }
  }, [key, value]);

  return [value, setValue];
};
