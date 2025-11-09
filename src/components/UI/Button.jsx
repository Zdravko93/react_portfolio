import React from "react";

const Button = React.memo(
  React.forwardRef(
    (
      { href, type = "button", className = "", children, onClick, ...props },
      ref
    ) => {
      const baseClass =
        "flex justify-center items-center p-3 w-full text-[0.6rem] md:text-sm transition";

      const handleKeyDown = (e) => {
        const isSpace = e.key === " " || e.key === "Spacebar";
        const isEnter = e.key === "Enter";

        if (isSpace || isEnter) {
          e.preventDefault(); // Prevent page from scrolling
          onClick?.(e); // only runs if onClick exists

          // Navigate to the link manually
          if (href) {
            window.location.href = href;
          }
        }
      };

      const sharedProps = {
        className: className || baseClass,
        onClick,
        ref,
        ...props,
      };

      return href ? (
        <a
          href={href}
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          {...sharedProps}
        >
          {children}
        </a>
      ) : (
        <button type={type} {...sharedProps}>
          {children}
        </button>
      );
    }
  )
);

export default Button;
