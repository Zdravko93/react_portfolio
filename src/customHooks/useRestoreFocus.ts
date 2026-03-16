import { useEffect, RefObject } from "react";

export function useRestoreFocus<T extends HTMLElement>(
  active: boolean,
  containerRef: RefObject<T | null>,
): void {
  useEffect(() => {
    if (!active && containerRef.current) {
      const timeout = setTimeout(() => {
        containerRef.current?.focus();
      }, 0); // debounce

      return () => clearTimeout(timeout);
    }
  }, [active, containerRef]);
}
