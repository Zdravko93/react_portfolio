import React from "react";
import { motion } from "framer-motion";

import Image from "../UI/Image";

const CreditsItem = React.memo(
  React.forwardRef(({ item, firstImage, secondImage, variants }, ref) => {
    // Removed motion() wrapper because it caused re-animation issues or visibility bugs
    // Instead, I passed motion props('variants') directly to the native element (li) inside the component, and made it <motion.li>
    return (
      <motion.li
        ref={ref}
        variants={variants}
        className="flex items-center space-x-2 lg:text-lg w-full"
        aria-label={`${item.entry} - ${
          typeof item.value === "string" ? item.value : item.value?.join(", ")
        }`}
      >
        {/* ICON */}
        <div className="w-6 flex-shrink-0 flex justify-center pt-1">
          {/* First icon before label */}
          {/*  Decorative image, hence => alt="" */}
          {firstImage && (
            <Image
              src={firstImage.src}
              alt=""
              aria-hidden="true"
              imageClassName="w-5 h-5"
            />
          )}
        </div>

        {/* TEXT */}
        <div className="flex flex-wrap items-center gap-x-2">
          {/* Label */}
          <span className="font-semibold text-gray-800 dark:text-gray-100">
            {item.entry}
          </span>
          {/* Dash */}
          <span aria-hidden="true">—</span>

          {item.entry === "Design & Development" && (
            <span className="text-gray-700 dark:text-gray-300">
              Zdravko Delić
            </span>
          )}

          {/* Second icon before value */}
          {secondImage && (
            <Image
              src={secondImage.src}
              alt=""
              aria-hidden="true"
              imageClassName="w-5 h-5"
            />
          )}

          {/* Value */}
          {/* STRING type of value */}
          {item.value && typeof item.value === "string" && (
            <span className="text-gray-700 dark:text-gray-300">
              {item.value}
            </span>
          )}
          {/* ARRAY type of value */}
          {Array.isArray(item.value) && (
            <span className="text-gray-700 dark:text-gray-300">
              {item.value.join(", ")}
            </span>
          )}
        </div>
      </motion.li>
    );
  })
);

export default CreditsItem;
