import { Variants } from "framer-motion";

export interface Stat {
  label: string;
  percent?: number;
  image?: string;
  alt?: string;
  description?: string;
  fullWidth?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface LevelCompleteItemData {
  entry: string;
  value: string | string[] | number;
  percent?: number;
  image?: {
    src: string;
    alt: string;
  };
  childrenVariants?: Variants;
}

export interface CreditItem {
  entry: string;
  value?: string | string[];
  images:
    | {
        src: string;
        alt: string;
      }
    | {
        src: string;
        alt: string;
      }[];
}
