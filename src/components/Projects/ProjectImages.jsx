import React, { useState, useMemo } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Button from "../UI/Button";
import Image from "../UI/Image";

const ProjectImages = React.memo(function ProjectImages({
  images,
  setLightboxOpen,
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const lightboxImages = useMemo(
    () =>
      images.map(({ src, alt }, i) => ({
        src,
        title: alt || `Screenshot ${i + 1}`,
        description: alt || "",
      })),
    [images]
  );

  if (!images || images.length === 0) return null;

  return (
    <div>
      <h4 className="text-cyan-700 dark:text-cyan-400 font-semibold mb-2">
        Screenshots:
      </h4>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map(({ src, alt }, i) => (
          <li key={i}>
            <Button
              onClick={() => {
                setIndex(i);
                setOpen(true);
                setLightboxOpen(true);
              }}
              className="w-full 
                         hover:scale-105
                         focus:outline-none focus:scale-110 
                         transition duration-300 rounded-sm"
              aria-label={`Open screenshot ${i + 1}: ${alt}`}
            >
              <Image
                src={src}
                alt={alt}
                showFigure={true}
                showCaption={true}
                figureClassName="w-full h-48 sm:h-64 overflow-hidden rounded-lg border border-cyan-700"
                captionClassName="text-xs text-gray-400 mt-2 text-center"
                imageClassName="w-full h-full object-cover"
              />
            </Button>
          </li>
        ))}
      </ul>

      <Lightbox
        open={open}
        close={() => {
          setOpen(false);
          setLightboxOpen(false);
        }}
        index={index}
        slides={lightboxImages}
        on={{
          view: ({ index }) => setIndex(index),
        }}
      />
    </div>
  );
});

export default ProjectImages;
