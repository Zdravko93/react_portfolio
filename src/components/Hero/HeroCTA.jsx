import { motion } from "framer-motion";

import crossedSwords from "../../assets/images/crossed-swords.png";
import examineImg from "../../assets/images/examine.png";

import SpeakerOnIcon from "../UI/SpeakerOnIcon";
import SpeakerOffIcon from "../UI/SpeakerOffIcon";
import Button from "../UI/Button";
import HeroCTAContent from "./HeroCTAContent";

import { useSoundPlayer } from "../../customHooks/useSoundEffects";

import { useTheme } from "../../context/ThemeContext";

const MotionCTAButton = motion.create(Button);

export default function HeroCTA({ toggleMute, isMuted }) {
  // extract from custom hook
  const { playSwordClash, playChime } = useSoundPlayer(isMuted);
  // derive mute on/off icons based on 'isMuted' state
  const muteOnOff = isMuted ? (
    <SpeakerOffIcon className="w-6 h-6" />
  ) : (
    <SpeakerOnIcon className="w-6 h-6" />
  );

  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center space-x-4">
      {/* MUTE BUTTON */}
      <Button
        aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
        onClick={toggleMute}
        className="text-gray-800 hover:text-pink-600 dark:text-[#00ff88] dark:hover:text-pink-500 
                     w-[30px] height-[30px]"
      >
        {muteOnOff}
      </Button>
      {/* CTA BUTTONS */}
      {/* 'See My Battles' CTA */}
      <MotionCTAButton
        href="#projects"
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={`bg-blue-700 hover:bg-blue-800 dark:bg-pink-500 dark:hover:bg-pink-400
                   text-white dark:text-black uppercase tracking-wider
                     px-2 py-4 focus-visible:[transform:scale(1.01)] transition duration-200
                     ${theme === "light" ? "btn-glow" : ""}
                     `}
        onClick={playSwordClash}
      >
        <HeroCTAContent
          src={crossedSwords}
          alt="Crossed swords icon for projects section"
          text="See my Battles"
        />
      </MotionCTAButton>
      {/* 'Recruit an Ally' CTA */}
      <MotionCTAButton
        href="#contact"
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className={`bg-green-600 hover:bg-green-700 dark:bg-yellow-300 dark:hover:bg-yellow-200 
                   text-white dark:text-black uppercase tracking-wider 
                     px-2 py-4 focus-visible:[transform:scale(1.01)] transition duration-200
                      ${theme === "light" ? "btn-glow" : ""}
                      `}
        onClick={playChime}
      >
        <HeroCTAContent
          src={examineImg}
          alt="Magnifying glass icon for recruiting"
          text="Recruit an Ally"
        />
      </MotionCTAButton>
    </div>
  );
}
