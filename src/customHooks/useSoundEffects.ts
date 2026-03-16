// Sounds
import swordClashSound from "../assets/sounds/sword-clash.mp3";
import chimeSound from "../assets/sounds/chime.mp3";
import type { UseSoundPlayerReturn } from "../types/userInterface";

export function useSoundPlayer(isMuted: boolean): UseSoundPlayerReturn {
  const playSound = (sound: string): void => {
    if (!isMuted) new Audio(sound).play();
  };

  return {
    playSwordClash: () => playSound(swordClashSound),
    playChime: () => playSound(chimeSound),
  };
}
