import { useCallback } from "react";
// custom hook - localStorage
import { useLocalStorage } from "./useLocalStorage";

export function usePersistentMute(key: string = "muteSounds"): {
  isMuted: boolean;
  toggleMute: () => void;
} {
  const [isMuted, setIsMuted] = useLocalStorage<boolean>(key, false);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, [setIsMuted]);

  return {
    isMuted,
    toggleMute,
  };
}
