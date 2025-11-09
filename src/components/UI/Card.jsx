import React from "react";

const Card = React.forwardRef(
  ({ as: Component = "div", className = "", children, ...props }, ref) => {
    return (
      <Component className={className} ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);

export default Card;
