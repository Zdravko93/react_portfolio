import { useEffect } from "react";

export function useRestoreFocus(active, containerRef) {
  useEffect(() => {
    if (!active && containerRef.current) {
      setTimeout(() => {
        containerRef.current?.focus();
      }, 0); // debounce
    }
  }, [active, containerRef]);
}
