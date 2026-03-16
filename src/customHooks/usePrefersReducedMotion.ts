import { useEffect, useState } from "react";

export function usePrefersReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery: MediaQueryList = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    setReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent): void => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return reducedMotion;
}
