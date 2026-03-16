import React from "react";
import type { ButtonProps } from "../../types/button";

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ href, type = "button", className, children, onClick }, ref) => {
  const baseClass =
    "flex justify-center items-center p-3 w-full text-sm transition";

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>} // type assertions for anchor
        href={href}
        role="button"
        tabIndex={0}
        className={className ?? baseClass}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>} // type assertion for button ref
      type={type}
      className={className || baseClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default React.memo(Button);
