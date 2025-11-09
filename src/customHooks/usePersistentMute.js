import { useCallback } from "react";
// custom hook - localStorage
import { useLocalStorage } from "./useLocalStorage";

export function usePersistentMute(key = "muteSounds") {
  const [isMuted, setIsMuted] = useLocalStorage(key, false);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, [setIsMuted]);

  return {
    isMuted,
    toggleMute,
  };
}
