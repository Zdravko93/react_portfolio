import { useState, useEffect } from "react";

export function useViewportWidth(): number {
  const [viewportWidth, setViewportWidth] = useState<number>(() =>
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: ReturnType<typeof setTimeout>; // here in the browser setTimeout returns number, but in Node it returns NodeJS.Timeout

    const handleResize = (): void => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setViewportWidth(window.innerWidth);
      }, 5); // debounce window resizing
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewportWidth;
}
