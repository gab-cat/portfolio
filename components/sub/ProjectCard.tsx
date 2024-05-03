import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative z-10 cursor-pointer overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#c9c9c9]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="object-contain w-full"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;