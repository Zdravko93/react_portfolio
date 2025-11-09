import React, { useMemo } from "react";

const Image = React.memo(function Image({
  src,
  alt = "",
  showFigure = false,
  showCaption = false,
  figureClassName = "",
  captionClassName = "",
  imageClassName = "",
}) {
  const imageElement = useMemo(() => {
    if (!src) return null;

    return (
      <img src={src} alt={alt} loading="lazy" className={imageClassName} />
    );
  }, [src, alt, imageClassName]);

  if (!src) return null;

  if (!showFigure) return imageElement;

  return (
    <figure className={figureClassName}>
      {imageElement}
      {showCaption && alt && (
        <figcaption className={captionClassName}>{alt}</figcaption>
      )}
    </figure>
  );
});

export default Image;
