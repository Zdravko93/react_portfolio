import { useMemo } from "react";
import { motion } from "framer-motion";

import arrowUpImg from "../../assets/images/arrow-up.png";
import arrowUpLightThemeImg from "../../assets/images/arrow-up-light-theme.png";

import Card from "../UI/Card";

import { levelCompleteData } from "../../data/project/data";
import {
  levelCompleteContainerVariants,
  levelCompleteChildrenVariants,
} from "../../data/animations/animations";

import LevelCompleteItem from "./LevelCompleteItem";
import Button from "../UI/Button";
import Image from "../UI/Image";

// Accessibility hook for user preference - reduced motion
import { useMotionProps } from "../../customHooks/useMotionsProps";
// context
import { useTheme } from "../../context/ThemeContext";

const MotionCTAButton = motion.create(Button);

export default function LevelComplete() {
  const { theme } = useTheme();

  const containerVariants = useMotionProps({
    variants: levelCompleteContainerVariants,
    viewport: { once: true, amount: 0.4 },
  });

  const childrenVariants = useMotionProps({
    variants: levelCompleteChildrenVariants,
    viewport: { once: true, amount: 0.4 },
  });

  const buttonArrowImage = useMemo(() => {
    return theme === "dark" ? (
      <Image src={arrowUpImg} alt="" aria-hidden="true" />
    ) : (
      <Image src={arrowUpLightThemeImg} alt="" aria-hidden="true" />
    );
  }, [theme]);

  return (
    <Card as="section" className="mx-5">
      <div>
        <motion.h2
          className="text-xl lg:text-2xl text-center text-blue-900 dark:text-orange-500 font-bold mb-10 tracking-widest"
          {...childrenVariants}
        >
          LEVEL COMPLETE
        </motion.h2>

        <motion.ul
          {...containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-6xl"
        >
          {levelCompleteData.map(({ entry, value, percent, image }, index) => (
            <LevelCompleteItem
              key={index}
              entry={entry}
              value={value}
              percent={percent}
              image={image}
              childrenVariants={childrenVariants.variants}
            />
          ))}
        </motion.ul>

        {/* MOTION CTA BUTTON */}
        <MotionCTAButton
          href="#contact"
          className="group mt-28 w-60 mx-auto flex items-center justify-center gap-2 text-xs lg:text-sm 
                     bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-500 dark:hover:bg-cyan-600 transition-colors px-2 py-3 
                     rounded font-semibold text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants.variants}
        >
          <div className="flex items-center w-6 h-6 transform transition-transform duration-200 ease-in-out group-hover:-translate-y-1">
            {buttonArrowImage}
          </div>
          Send A Raven
        </MotionCTAButton>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Level Complete",
            description:
              "Summary of achievements and acquired skills of Zdravko.",
            url: "https://your-domain.com/#level-complete", // Upisati moj URL
            mainEntity: {
              "@type": "Person",
              name: "Zdravko",
              knowsAbout: levelCompleteData.map((item) => ({
                "@type": "Achievement",
                name: item.entry,
                description: Array.isArray(item.value)
                  ? item.value.join(", ")
                  : item.value,
              })),
            },
          }),
        }}
      ></script>
    </Card>
  );
}
