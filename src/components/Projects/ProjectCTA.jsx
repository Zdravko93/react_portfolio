import React from "react";

import Button from "../UI/Button";

const ProjectCTA = React.memo(
  React.forwardRef(
    ({ demoLink, codeLink, onDetailsClick, title, trapActive }, ref) => {
      const tabIndex = trapActive ? 0 : -1; // Enable focus only when trap is active

      return (
        <div
          ref={ref}
          className="flex items-center gap-5 text-xs md:text-sm flex-wrap"
        >
          {demoLink && (
            <Button
              href={demoLink}
              className="text-white hover:underline bg-red-400 h p-1 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={tabIndex}
            >
              Live Demo
            </Button>
          )}
          {codeLink && (
            <Button
              href={codeLink}
              className="text-white hover:underline bg-red-400 p-1 rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={tabIndex}
            >
              Source Code
            </Button>
          )}
          <Button
            aria-label={`View case study for ${title}`}
            className="text-white bg-cyan-900 dark:bg-cyan-700 hover:bg-cyan-800 dark:hover:bg-cyan-600 transition px-3 py-3 rounded cursor-pointer text-center uppercase tracking-wider"
            onClick={onDetailsClick}
            tabIndex={tabIndex}
          >
            Quest Log
          </Button>
        </div>
      );
    }
  )
);

export default ProjectCTA;
