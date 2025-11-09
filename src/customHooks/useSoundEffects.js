// Sounds(mp3)
import swordClashSound from "../assets/sounds/sword-clash.mp3";
import chimeSound from "../assets/sounds/chime.mp3";

export function useSoundPlayer(isMuted) {
  const playSound = (sound) => {
    if (!isMuted) new Audio(sound).play();
  };

  return {
    playSwordClash: () => playSound(swordClashSound),
    playChime: () => playSound(chimeSound),
  };
}
