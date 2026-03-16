import { useState, useCallback } from "react";
import { useActiveSection } from "./useActiveSection";
import { useViewportWidth } from "./useViewportWidth";
import { usePersistentMute } from "./usePersistentMute";

export function useAppState(): {
  activeSection: string;
  clickedSection: string | null;
  viewportWidth: number;
  menuOpen: boolean;
  isMuted: boolean;
  toggleMute: () => void;
  toggleMenu: () => void;
  handleNavClick: (id: string) => void;
} {
  const { isMuted, toggleMute } = usePersistentMute();
  const activeSection = useActiveSection();
  const viewportWidth = useViewportWidth();

  const [clickedSection, setClickedSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  const handleNavClick = useCallback((id: string) => {
    setClickedSection(id);
    setMenuOpen(false);

    setTimeout(() => {
      setClickedSection(null);
    }, 1000);
  }, []);

  return {
    activeSection,
    clickedSection,
    viewportWidth,
    menuOpen,
    isMuted,
    toggleMute,
    toggleMenu,
    handleNavClick,
  };
}
