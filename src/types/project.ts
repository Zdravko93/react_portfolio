export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectDetails {
  what: string;
  why: string;
  learned: string;
  reflect: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  details: ProjectDetails;
  images: ProjectImage[];
  demoLink: string;
  codeLink: string;
  detailsLink?: string; // optional
}
