import React from "react";

import ProjectTag from "./ProjectTag";
import ProjectImages from "./ProjectImages";

import { useTheme } from "../../context/ThemeContext";

const ProjectDetails = React.memo(function ProjectDetails({
  project,
  setLightboxOpen,
}) {
  const { details = {}, tech, images = [] } = project;
  const { what, why, learned, reflect } = details;

  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  // create an array of (extracted) values to be mapped through to update UI in a cleaner way
  const detailContent = [what, why, learned, reflect];
  // create an array od labels(aria-label) for each section
  const detailLabels = ["What", "Why", "Learned", "Reflection"];

  return (
    <>
      <h3 className="sr-only">Project Details</h3>

      <div className="space-y-4">
        {/* TEXT */}
        {detailContent.map((text, i) =>
          text ? (
            <section key={i} aria-label={detailLabels[i]}>
              <h4 className="text-cyan-700 dark:text-cyan-400 font-semibold mb-1">
                {detailLabels[i]}
              </h4>
              <p className="text-gray-500 dark:text-gray-300 text-xs lg:text-sm leading-relaxed">
                {text}
              </p>
            </section>
          ) : null
        )}
        {/* TECH STACK */}
        {tech && tech.length > 0 && (
          <div>
            <h4 className="text-cyan-700 dark:text-cyan-400 font-semibold mb-2">
              Tech Used:
            </h4>
            <ul
              className="flex flex-wrap gap-2"
              aria-label="Technologies used in this project"
            >
              {tech.map((item, index) => (
                <ProjectTag
                  key={index}
                  label={item}
                  isLightTheme={isLightTheme}
                  isModalTag={true}
                >
                  {item}
                </ProjectTag>
              ))}
            </ul>
          </div>
        )}
        {/* IMAGES */}
        <ProjectImages images={images} setLightboxOpen={setLightboxOpen} />
      </div>
    </>
  );
});

export default ProjectDetails;
