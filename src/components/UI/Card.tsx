import React, { forwardRef, ElementType } from "react";
import type { CardProps } from "../../types/userInterface";

type CardComponent = <T extends ElementType = "div">(
  props: CardProps<T> & { ref?: React.Ref<Element> },
) => React.ReactElement | null;

const Card = forwardRef(
  <T extends ElementType = "div">(
    { as, className = "", children, ...props }: CardProps<T>,
    ref: React.Ref<Element>,
  ) => {
    const Component = as || "div";

    return (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    );
  },
) as CardComponent;

export default Card;
