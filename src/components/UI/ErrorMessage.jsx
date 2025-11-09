import { motion } from "framer-motion";

export default function ErrorMessage({ error, ...props }) {
  return (
    error && (
      <motion.p
        className="text-xs text-[#cc0000] dark:text-red-500 mb-4 h-4"
        {...props}
      >
        {error}
      </motion.p>
    )
  );
}
