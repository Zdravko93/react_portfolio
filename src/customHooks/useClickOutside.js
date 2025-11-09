import { useEffect } from "react";

export function useClickOutSide(active, callback, refA, refB) {
  useEffect(() => {
    if (!active) return;

    const handleClick = (event) => {
      if (
        refA.current &&
        !refA.current.contains(event.target) &&
        refB.current &&
        !refB.current.contains(event.target)
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [active, callback, refA, refB]);
}
