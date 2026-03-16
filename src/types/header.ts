import type { Layout } from "./userInterface";

export interface HeaderProps {
  activeSection: string;
  onNavClick: (section: string) => void;
  viewportWidth: number;
  menuOpen: boolean;
  toggleMenu: () => void;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface RenderNavLinkProps {
  layout: Layout;
  isActive: boolean;
  link: NavLink;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface RenderNavLinksProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  layout?: Layout;
  menuOpen?: boolean;
}
