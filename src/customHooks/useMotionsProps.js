import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useMotionProps({
  variants,
  initial = "hidden",
  whileInView = "visible",
  viewport = { once: true, amount: 0.6 },
  transition = { duration: 0.5, ease: "easeOut" },
  animate = undefined,
  exit = undefined,
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return {};
  }

  const motionProps = {
    variants,
    initial,
    whileInView,
    viewport,
    transition,
    animate,
    exit,
  };

  // Strip undefined values
  Object.keys(motionProps).forEach(
    (key) => motionProps[key] === undefined && delete motionProps[key]
  );

  return motionProps;
}
