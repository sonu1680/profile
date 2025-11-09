import React from "react";
import Heading from "./Heading";
import { cn } from "@/lib/utils";
import Image from "next/image";

const tags = [
  { title: "JavaScript", icon: "/javascript.svg" },
  { title: "TypeScript", icon: "/typescript.svg" },
  { title: "React", icon: "/react.svg" },
  { title: "Next.js", icon: "/nextjs.svg" },
  { title: "Node.js", icon: "/nodejs.svg" },
  { title: "Express", icon: "/express.svg" },
  { title: "PostgreSQL", icon: "/postgresql.svg" },
  { title: "Docker", icon: "/docker.svg" },
  { title: "Git", icon: "/git.svg" },

  { title: "Prisma", icon: "/prisma.svg" },
];

const Skills = () => {
  return (
    <div className="experience w-full md:px-4   ">
      <Heading
        title="Skills"
        desc="A collection of my work spanning from blockchain applications to full-stack projects, both personal and professional."
      />
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <div
            key={tag.title}
            className={cn(
              "bg-[#1e1e1e] text-gray-300 text-lg px-3 py-1 rounded-md flex flex-row gap-x-2 border border-gray-700 "
            )}
          >
            <Image alt="img" src={tag.icon} height={10} width={20}  className="aspect-square " />
            {tag.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
