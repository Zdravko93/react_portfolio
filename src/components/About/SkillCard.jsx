import React from "react";
import { motion } from "framer-motion";

const SkillCard = React.memo(function SkillCard({
  skill,
  ...skillTagVariants
}) {
  return (
    <motion.li
      {...skillTagVariants}
      className="bg-gradient-to-br dark:from-cyan-400 dark:to-blue-500 dark:text-white
                  from-blue-100 to-cyan-100 text-blue-900 
                   rounded-full py-1 px-4 md:py-2 md:px-5 text-xs font-semibold 
                   shadow-inner shadow-blue-200 dark:shadow-cyan-900/40 hover:shadow-lg hover:ring-2 hover:ring-blue-300/40 dark:hover:ring-cyan-300/40 
                   transition-all duration-300 whitespace-nowrap"
    >
      {skill}
    </motion.li>
  );
});

export default SkillCard;
