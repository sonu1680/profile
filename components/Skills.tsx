import React from "react";
import Heading from "./Heading";
import { cn } from "@/lib/utils";
import Image from "next/image";

const tags = [
  { title: "JavaScript", icon: "/favicon.ico" },
  { title: "TypeScript", icon: "/favicon.ico" },
  { title: "React", icon: "/favicon.ico" },
  { title: "Next.js", icon: "/favicon.ico" },
  { title: "Node.js", icon: "/favicon.ico" },
  { title: "Express", icon: "/favicon.ico" },
  { title: "MongoDB", icon: "/favicon.ico" },
  { title: "PostgreSQL", icon: "/favicon.ico" },
  { title: "Solidity", icon: "/favicon.ico" },
  { title: "Rust", icon: "/favicon.ico" },
  { title: "Web3.js", icon: "/favicon.ico" },
  { title: "Ethers.js", icon: "/favicon.ico" },
  { title: "Hardhat", icon: "/favicon.ico" },
  { title: "Docker", icon: "/favicon.ico" },
  { title: "Git", icon: "/favicon.ico" },
  { title: "HTML", icon: "/favicon.ico" },
  { title: "CSS", icon: "/favicon.ico" },
  { title: "Tailwind CSS", icon: "/favicon.ico" },
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
            <Image alt="img" src={tag.icon} height={10} width={30}  className="aspect-square " />
            {tag.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
