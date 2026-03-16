import { useState, useEffect } from "react";

export function useActiveSection(threshold = 0.4): string {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections: NodeListOf<HTMLElement> =
      document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection((entry.target as HTMLElement).id);
          }
        });
      },
      {
        threshold,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return activeSection;
}
