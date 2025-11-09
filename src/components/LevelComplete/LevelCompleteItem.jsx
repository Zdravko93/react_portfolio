import React from "react";
import { motion } from "framer-motion";

import Image from "../UI/Image";

import { useMotionProps } from "../../customHooks/useMotionsProps";

const LevelCompleteItem = React.memo(function LevelCompleteItem({
  entry,
  value,
  percent,
  image,
  childrenVariants,
}) {
  // extract from custom hook - experience bar motion props
  const expProgressBarVariants = useMotionProps({
    variants: undefined,
    initial: { width: 0 },
    whileInView: { width: `${percent}%` },
    transition: { duration: 1.2, ease: "easeOut" },
    viewport: { once: true },
  });

  return (
    <motion.li
      className="flex flex-col items-center w-full p-4 border dark:border-gray-700 dark:bg-gray-900 shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
      variants={childrenVariants}
    >
      {/* ICON */}
      {image?.src && (
        <Image src={image.src} alt={image.alt || entry} imageClassName="w-16" />
      )}
      {/* TEXT */}
      <div className="text-center w-full mt-3">
        <p className="text-sm md:text-md  font-semibold text-gray-800 dark:text-pink-500">
          {entry}:
        </p>

        {Array.isArray(value) ? (
          <ul className="list-none text-white mt-5 space-y-2 mx-auto w-max">
            {value.map((item, i) => (
              <li
                key={i}
                className="relative pl-6 text-left leading-tight 
                                     before:content-['•'] before:absolute before:left-0 before:top-0 
                                     before:text-gray-800 dark:before:text-pink-400 before:leading-tight
                                     text-xs text-black/55 dark:text-[#00ff88] uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <>
            <p className="text-blue-800 dark:text-orange-200 text-xs md:text-sm lg:text-md uppercase mt-5">
              {value}
            </p>

            {/* XP Bar */}
            {entry === "XP GAINED" && (
              <div className="mt-2 w-full bg-gray-800 rounded h-4 overflow-hidden">
                <motion.div
                  className="bg-orange-500 dark:bg-green-400 h-full rounded"
                  {...expProgressBarVariants}
                />
              </div>
            )}
          </>
        )}
      </div>
    </motion.li>
  );
});

export default LevelCompleteItem;
