import { HTMLMotionProps } from "framer-motion";
import { MotionProps, Variants } from "framer-motion";

import type { Stat } from "../types/dataTypes";
import type { CreditItem } from "../types/dataTypes";
import type { Project } from "./project";

import { ElementType, ComponentPropsWithRef } from "react";

export type Layout = "mobile" | "desktop";
// HEADER

// WRAPPER
export type CardProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & ComponentPropsWithRef<T>;

// ERROR
export type ErrorMessageProps = {
  error?: string;
} & React.HTMLAttributes<HTMLParagraphElement> &
  MotionProps;

// IMAGE
export type ImageProps = {
  src?: string;
  alt?: string;
  showFigure?: boolean;
  showCaption?: boolean;
  figureClassName?: string;
  captionClassName?: string;
  imageClassName?: string;
};

// SVG
export type IconProps = React.SVGProps<SVGSVGElement>;

// LABEL
export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

// INPUT
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

// TEXT AREA
export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

// SECTION HEADER
export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type SectionHeaderProps = {
  tag?: HeadingTag;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

// useSoundEffect custom hook props
export interface UseSoundPlayerReturn {
  playSwordClash: () => void;
  playChime: () => void;
}

// useMotionProps custom hook props
export type MotionPropsOptions = {
  variants?: Variants;
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  viewport?: MotionProps["viewport"];
  transition?: MotionProps["transition"];
  animate?: MotionProps["animate"];
  exit?: MotionProps["exit"];
};

// HERO SECTION
export type StatGridProps = {
  mounted: boolean;
  stat: Stat;
  isLight: boolean;
};

export interface HeroCTAContentProps {
  src: string;
  alt: string;
  text: string;
  className?: string;
}

// ABOUT ME
export type SkillCardProps = {
  skill: string;
} & HTMLMotionProps<"li">;

export type SkillsSectionProps = {
  skills?: string[];
  subtitleClasses?: string;
  children: React.ReactNode;
} & HTMLMotionProps<"div">;

// CREDITS
export type CreditsItemProps = {
  item: CreditItem;
  firstImage?: { src: string; alt: string };
  secondImage?: { src: string; alt: string };
  variants?: Variants;
};

// PROJECTS
export type ProjectTagProps = {
  label: string;
  isLightTheme?: boolean;
  isModalTag?: boolean;
};

export type ProjectDetailsType = {
  details?: {
    what?: string;
    why?: string;
    learned?: string;
    reflect?: string;
  };
  tech?: string[];
  images?: ProjectImage[];
};

export type ProjectDetailsProps = {
  project: ProjectDetailsType;
  setLightboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ProjectImage = {
  src: string;
  alt?: string;
};

export type ProjectImagesProps = {
  images: ProjectImage[];
  setLightboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ProjectCardProps = {
  project: Project;
  onDetailsClick: () => void;
  index: number;
};

export interface ProjectCTAProps {
  demoLink?: string;
  codeLink?: string;
  detailsLink?: string;
  onDetailsClick: () => void;
  title: string;
  trapActive: boolean;
}

export interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}
