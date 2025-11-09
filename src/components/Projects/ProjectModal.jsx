import { useState, useRef } from "react";
import ReactDOM from "react-dom";

import { motion, AnimatePresence } from "framer-motion";

import { useEscapeKey } from "../../customHooks/useEscapeKey";
import { useFocusTrap } from "../../customHooks/useFocusTrap";
// Accessibility hook for user preference - reduced motion
import { useMotionProps } from "../../customHooks/useMotionsProps";

import ProjectDetails from "./ProjectDetails";
import Card from "../UI/Card";
import Button from "../UI/Button";

export default function ProjectModal({ project, onClose }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const modalRef = useRef(null);

  const backdropMotionVariants = useMotionProps({
    variants: undefined,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  });

  const modalMotionVariants = useMotionProps({
    variants: undefined,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: "easeOut" },
  });

  // close modal on 'Escape' key
  useEscapeKey(!!project && !lightboxOpen, onClose);
  // Trap focus inside modal window
  useFocusTrap(!!project && !lightboxOpen, modalRef);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {/* MODAL BACKDROP */}
      {project && (
        <motion.div
          key="backdrop"
          {...backdropMotionVariants}
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center px-4"
          onClick={onClose}
        >
          {/*  MODAL WINDOW */}
          <Card
            as={motion.div}
            ref={modalRef}
            key="modal"
            {...modalMotionVariants}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="bg-gray-100 dark:bg-gray-900 text-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              aria-label="Close modal"
              className="absolute top-3 right-3 text-red-500 dark:text-white text-xl hover:text-red-400 dark:hover:text-cyan-400 transition"
              onClick={onClose}
            >
              x
            </Button>

            {/* Project Details Content */}
            <h2
              id="modal-title"
              className="text-lg md:text-xl xl:text-2xl font-bold mb-4 text-cyan-900 dark:text-[#00ff88]"
            >
              {project.title}
            </h2>
            <ProjectDetails
              project={project}
              setLightboxOpen={setLightboxOpen}
            />
          </Card>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root")
  );
}
