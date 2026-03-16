import { useEffect, useRef, Ref, RefObject } from "react";

export function useCombinedRefs<T>(
  ...refs: Array<Ref<T> | null | undefined>
): RefObject<T | null> {
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        // ref is a RefObject
        (ref as RefObject<T | null>).current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}
