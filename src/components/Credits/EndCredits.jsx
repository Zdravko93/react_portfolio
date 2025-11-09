import React, { useMemo } from "react";
import { motion } from "framer-motion";

import Card from "../UI/Card";
import Image from "../UI/Image";

// svg icons - components
import CutSceneDarkThemeIcon from "./../UI/CutSceneDarkThemeIcon";
import CutSceneLightThemeIcon from "./../UI/CutSceneLightThemeIcon";
// png - coffe
import coffeeImg from "../../assets/images/coffee.png";
// context
import { useTheme } from "../../context/ThemeContext";

const EndCredits = React.memo(function EndCredits() {
  const { theme } = useTheme();

  const CutSceneIcon = useMemo(() => {
    return theme === "dark" ? (
      <CutSceneDarkThemeIcon aria-hidden="true" focusable="false" />
    ) : (
      <CutSceneLightThemeIcon aria-hidden="true" focusable="false" />
    );
  }, [theme]);

  return (
    <Card
      as="section"
      className="w-full flex flex-col items-center justify-center text-center px-4 py-12"
      aria-label="Final thank you section"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-2xl md:text-3xl font-semibold tracking-widest text-gray-800 dark:text-gray-200 flex gap-12 items-center"
      >
        <span>THE END</span>
        {CutSceneIcon}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-4 text-sm text-gray-600 dark:text-gray-400 font-mono max-w-md"
      >
        Thanks for scrolling through. This portfolio is a reflection of my love
        for building, designing, and telling stories through code.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-2 mx-4 text-xs text-gray-400 dark:text-gray-600 italic"
      >
        Built with React, Tailwind, and an unhealthy amount of coffee
        <span className="w-4 h-4 md:w-6 md:h-6 inline-flex align-middle ml-2">
          <Image
            src={coffeeImg}
            alt=""
            aria-hidden="true"
            className="w-6 h-6"
          />
        </span>
      </motion.p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "End Credits",
            description:
              "Final remarks and acknowledgments from Zdravko's personal portfolio.",
            url: "https://your-domain.com/#the-end", // upisati moj URL
            mainEntity: {
              "@type": "Person",
              name: "Zdravko Delić",
              description:
                "Thanks for scrolling through. This portfolio reflects my love for building, designing, and storytelling through code.",
              knowsAbout: [
                "React",
                "Tailwind CSS",
                "Framer Motion",
                "Accessible Design",
              ],
              knowsLanguage: "English",
            },
          }),
        }}
      ></script>
    </Card>
  );
});

export default EndCredits;
