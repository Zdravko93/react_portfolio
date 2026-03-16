import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import type { MotionPropsOptions } from "../types/userInterface";
import { MotionProps } from "framer-motion";

export function useMotionProps({
  variants,
  initial = "hidden",
  whileInView = "visible",
  viewport = { once: true, amount: 0.6 },
  transition = { duration: 0.5, ease: "easeOut" },
  animate,
  exit,
}: MotionPropsOptions): MotionProps {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return {};
  }

  const motionProps: MotionProps = {
    variants,
    initial,
    whileInView,
    viewport,
    transition,
    animate,
    exit,
  };

  // Strip undefined safely
  (Object.keys(motionProps) as (keyof MotionPropsOptions)[]).forEach((key) => {
    if (motionProps[key] === undefined) {
      delete motionProps[key];
    }
  });

  return motionProps;
}
