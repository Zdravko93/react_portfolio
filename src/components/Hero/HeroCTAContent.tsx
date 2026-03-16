import Image from "../UI/Image";

import type { HeroCTAContentProps } from "../../types/userInterface";

export default function HeroCTAContent({
  src,
  alt,
  text,
  className = "",
}: HeroCTAContentProps) {
  return (
    <div className={`min-w-fit flex items-center gap-[0.2rem] ${className}`}>
      <Image src={src} alt={alt} imageClassName="w-5 sm:w-6 md:w-8" />
      <span className="text-[0.6rem] md:text-xs">{text}</span>
    </div>
  );
}
