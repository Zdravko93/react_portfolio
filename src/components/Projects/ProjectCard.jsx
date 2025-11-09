import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Card from "../UI/Card";
import ProjectTag from "./ProjectTag";
import ProjectCTA from "./ProjectCTA";

import { projectCardVariants } from "../../data/animations/animations";

import { useMotionProps } from "../../customHooks/useMotionsProps";
import { useFocusTrap } from "../../customHooks/useFocusTrap";
import { useEscapeKey } from "../../customHooks/useEscapeKey";
import { useCombinedRefs } from "../../customHooks/useCombinedRefs";

export default function ProjectCard({
  project: { title, description, tech, demoLink, codeLink, detailsLink },
  onDetailsClick,
  index,
}) {
  const controls = useAnimation();
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const focusRef = useRef(null);
  const combinedRef = useCombinedRefs(inViewRef, focusRef);

  const ctaRef = useRef(null);
  const [trapActive, setTrapActive] = useState(false);

  // Active focus trap inside ProjectCTA buttons when trapActive is true
  useFocusTrap(trapActive, ctaRef);

  // useCallback to memoize the escape handler
  const handleEscape = useCallback(() => {
    setTrapActive(false);
    focusRef.current?.focus();
  }, []);

  // Use the hook for Escape key listener
  useEscapeKey(trapActive, handleEscape);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const projectVariants = useMotionProps({
    variants: projectCardVariants,
    animate: controls,
    viewport: { once: true, amount: 0.4 },
  });

  const handleKeyDown = useCallback(
    (e) => {
      if (trapActive) return; // ignore when focus trap active

      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setTrapActive(true);
      }
    },
    [trapActive]
  );

  return (
    <Card
      as={motion.li}
      ref={combinedRef}
      {...projectVariants}
      custom={index} // pass index as a custom prop for variants
      role="button"
      aria-label={`Open project details for ${title}`}
      tabIndex={0} // make project card focusable via keyboard
      onKeyDown={handleKeyDown}
      className="bg-cyan-50 dark:bg-gray-900 border border-cyan-300 hover:border-cyan-500 
                   dark:border-cyan-700 rounded-lg p-6 shadow-md shadow-cyan-100 hover:shadow-lg 
                   dark:shadow-md dark:shadow-black/40 dark:hover:shadow-lg dark:hover:shadow-black/60
                   hover:shadow-cyan-400/40 transition hover:bg-cyan-100 dark:hover:bg-cyan-700/20
                   focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:scale-[1.02]"
    >
      <h3 className=" md:text-lg font-bold text-cyan-700 dark:text-[#00ff88] mb-2">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-4">
        {description}
      </p>

      <ul className="flex flex-wrap gap-2 mb-4">
        {tech.map((techItem, index) => (
          <ProjectTag key={index} label={techItem} />
        ))}
      </ul>

      <ProjectCTA
        ref={ctaRef}
        demoLink={demoLink}
        codeLink={codeLink}
        detailsLink={detailsLink}
        title={title}
        onDetailsClick={onDetailsClick}
        trapActive={trapActive}
      />
    </Card>
  );
}
