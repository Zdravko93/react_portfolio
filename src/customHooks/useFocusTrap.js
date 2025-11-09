import { useEffect } from "react";

export function useFocusTrap(active, containerRef) {
  useEffect(() => {
    if (!active || !containerRef.current) return;

    const container = containerRef.current;

    const focusableElements = container.querySelectorAll(
      `a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])`
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Wait one tick to ensure tabIndex update is applied
    setTimeout(() => {
      firstElement?.focus();
    }, 0);

    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, containerRef]);
}
