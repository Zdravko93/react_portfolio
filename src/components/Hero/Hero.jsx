import { motion } from "framer-motion";

import joystickImg from "../../assets/images/joystick.png";

import Card from "../UI/Card";
import StatsGrid from "./StatsGrid";
import HeroCTA from "./HeroCTA";
import HeroProfile from "./HeroProfile";
import Image from "../UI/Image";

import {
  heroContainerVariants,
  heroContentVariants,
  heroProfileVariants,
} from "../../data/animations/animations";

import { useMotionProps } from "../../customHooks/useMotionsProps";

export default function Hero({ toggleMute, isMuted }) {
  const containerVariants = useMotionProps({
    variants: heroContainerVariants,
    initial: "initial",
    animate: "animate",
  });

  const contentVariants = useMotionProps({
    variants: heroContentVariants,
  });

  const profileVariants = useMotionProps({
    variants: heroProfileVariants,
  });

  return (
    <motion.div {...containerVariants} className="overflow-hidden">
      <motion.div variants={contentVariants.variants}>
        <Card
          as="section"
          id="home"
          aria-label="Hero introduction section"
          aria-labelledby="hero-heading"
          className="flex flex-col justify-center items-center px-4 pt-20 sm:pt-40"
        >
          <div className="max-w-xl space-y-6 mt-10 text-center">
            <div className="flex items-center justify-center gap-x-4">
              <Image src={joystickImg} alt="Joystick icon" />

              <h1
                id="hero-heading"
                className="text-xl md:text-2xl lg:text-3xl  uppercase text-gray-800 dark:text-[#00ff88]"
              >
                Player One:{" "}
                <span className="text-pink-600 dark:text-pink-500">
                  Zdravko
                </span>
              </h1>
            </div>

            <h2 className="text-md md:text-lg lg:text-xl text-gray-700 dark:text-[#00ff88]">
              Designing Digital Realms with Code
            </h2>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
              Status: Seeking First Quest<span className="blink">_</span>
            </p>
            <StatsGrid />
            <HeroCTA toggleMute={toggleMute} isMuted={isMuted} />
          </div>
        </Card>
      </motion.div>

      <motion.div variants={profileVariants.variants}>
        <HeroProfile />
      </motion.div>
    </motion.div>
  );
}
