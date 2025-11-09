import { useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Card from "../UI/Card";
import CreditsItem from "./CreditsItem";

import { creditsData } from "../../data/project/data";
import {
  creditsContainerVariants,
  creditsChildrenVariants,
  creditsHeadingVariants,
} from "../../data/animations/animations";

export default function Credits() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const renderedCredits = useMemo(() => {
    return creditsData.map((item, index) => {
      const images = Array.isArray(item.images) ? item.images : [item.images];
      const firstImage = images[0];
      const secondImage = images[1]; // optional trailing icon before value(text)

      return (
        <CreditsItem
          key={index}
          item={item}
          firstImage={firstImage}
          secondImage={secondImage}
          variants={creditsChildrenVariants}
        />
      );
    });
  }, [creditsData]);

  return (
    <Card
      as="section"
      ref={ref}
      className="text-center mt-12 mb-6 mx-4 text-sm text-gray-600 dark:text-gray-400 font-mono"
      aria-label="Project credits and technologies used"
    >
      <div className="max-w-xl mx-auto px-4 py-2 rounded-lg bg-white dark:bg-transparent shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-none">
        <motion.h4
          className="mb-4 uppercase tracking-widest text-gray-800 dark:text-gray-300 lg:text-2xl text-left pl-8"
          variants={creditsHeadingVariants}
          initial="hidden"
          animate={controls}
        >
          Credits
        </motion.h4>

        <motion.ul
          variants={creditsContainerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center space-y-2 list-none mx-auto"
        >
          {renderedCredits}
        </motion.ul>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Credits",
            description:
              "Technologies and tools used in building Zdravko's portfolio.",
            url: "https://your-domain.com/#credits", // Upisati svoj URL
            author: {
              "@type": "Person",
              name: "Zdravko Delić",
              url: "https://your-domain.com",
            },
            hasPart: creditsData.map((item) => ({
              "@type": "CreativeWork",
              name: item.entry,
              about: Array.isArray(item.value)
                ? item.value.join(", ")
                : item.value,
            })),
          }),
        }}
      ></script>
    </Card>
  );
}
