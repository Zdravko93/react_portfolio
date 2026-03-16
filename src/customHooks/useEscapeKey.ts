import { useEffect } from "react";

export function useEscapeKey(active: boolean, callback: () => void): void {
  useEffect(() => {
    if (!active) return; // do not set up listener if not active

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setTimeout(() => callback(), 0); // microtask delay
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, callback]);
}
