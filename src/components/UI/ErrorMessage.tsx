import { motion, MotionProps } from "framer-motion";
import type { ErrorMessageProps } from "../../types/userInterface";

export default function ErrorMessage({
  error,
  motionProps,
  ...props
}: Omit<ErrorMessageProps, keyof MotionProps> & { motionProps?: MotionProps }) {
  if (!error) return null;

  return (
    <motion.p
      className="text-xs text-[#cc0000] dark:text-red-500 mb-4 h-4"
      {...props}
      {...motionProps}
    >
      {error}
    </motion.p>
  );
}
