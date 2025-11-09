import React from "react";
import { motion } from "framer-motion";

import SkillCard from "./SkillCard";

import {
  skillsContainerVariants,
  skillTagItemVariants,
} from "../../data/animations/animations";
import { useMotionProps } from "../../customHooks/useMotionsProps";

const SkillsSection = React.memo(function SkillsSection({
  skills = [],
  subtitleClasses = "",
  children,
}) {
  const mainContainerVariants = useMotionProps({
    variants: undefined,
    viewport: { once: true, amount: 0.2 },
  });
  const childrenVariants = useMotionProps({
    variants: skillsContainerVariants,
    viewport: { once: true, amount: 0.5 },
  });
  const skillTagVariants = useMotionProps({
    variants: skillTagItemVariants,
  });

  return (
    <motion.div className="mt-24" {...mainContainerVariants}>
      <h3
        className={`text-blue-700 dark:text-[#00ff88] text-center md:text-2xl ${subtitleClasses}`}
      >
        {children}
      </h3>
      <motion.ul
        aria-label="List of skills"
        {...childrenVariants}
        className="mt-6 flex justify-center flex-wrap gap-2"
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} {...skillTagVariants} />
        ))}
      </motion.ul>
    </motion.div>
  );
});

export default SkillsSection;
