declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*module.css" {
  const src: { [key: string]: string };
  export default src;
}

declare module "*.css" {
  const src: string;
  export default src;
}
