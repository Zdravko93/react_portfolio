import { useState, useCallback } from "react";
import { motion } from "framer-motion";

import { projectsData } from "../../data/project/projects";
import { projectsContainerVariants } from "../../data/animations/animations";

import Card from "../UI/Card";
import ProjectCard from "./ProjectCard";
import SectionHeader from "../UI/SectionHeader";
import ProjectModal from "./ProjectModal";

import { useMotionProps } from "../../customHooks/useMotionsProps";

export default function ProjectsSection() {
  // modal state
  const [selectedProject, setSelectedProject] = useState(null);
  // Accessibility hook for user preference - reduced motion
  const containerVarians = useMotionProps({
    variants: projectsContainerVariants,
    viewport: { once: true, amount: 0.4 },
  });

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // to prevent background scroll
    document.body.style.paddingRight = `${
      window.innerWidth - document.documentElement.clientWidth
    }px`;
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = ""; // restore scroll
    document.body.style.paddingRight = "";
  };

  const handleDetailsClick = useCallback(
    (project) => () => openModal(project),
    []
  );

  return (
    <Card
      id="projects"
      as="section"
      aria-labelledby="projects-title"
      className="scroll-mt-48 w-[80%] max-w-6xl mx-auto"
    >
      <SectionHeader id="projects-title" tag="h2">
        Quests Completed
      </SectionHeader>
      <p className="text-center text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
        Also known as:
        <span className="text-blue-700 dark:text-[#00ff88]">
          “Damage I’ve Done”
        </span>
      </p>

      <motion.ul
        {...containerVarians}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12"
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onDetailsClick={handleDetailsClick(project)}
          />
        ))}
      </motion.ul>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}

      {/* SEO - add SEO schema dynamically from 'projectsData' */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            projectsData.map((project) => ({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: project.title,
              description: project.description,
              author: {
                "@type": "Person",
                name: "Zdravko",
              },
              url: "https://your-domain.com/#projects",
              programmingLanguage: "JavaScript",
              about: project.tech.join(", "),
            }))
          ),
        }}
      ></script>
    </Card>
  );
}
