import { useEffect, RefObject } from "react";

export function useClickOutSide<T extends HTMLElement, U extends HTMLElement>(
  active: boolean,
  callback: () => void,
  refA: RefObject<T | null>,
  refB: RefObject<U | null>,
): void {
  useEffect(() => {
    if (!active) return;

    const handleClick = (event: MouseEvent): void => {
      const target = event.target as Node;

      if (
        refA.current &&
        !refA.current.contains(target) &&
        refB.current &&
        !refB.current.contains(target)
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
