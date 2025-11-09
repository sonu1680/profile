import React from 'react'
import Heading from './Heading';
import ProjectCard from './ProjectCard';

export const experiences = [
  {
    role: "Full-Stack Blockchain Engineer",
    company: "Wildcard",
    status: "Current",
    description:
      "Building smart wallet infrastructure and blockchain applications",
    tags: ["Rust", "Solana", "EVM", "Next.js"],
  },
  {
    role: "Smart Contract Developer",
    company: "ChainLabs",
    status: "2023 – 2024",
    description:
      "Developed and audited Solidity contracts for DeFi protocols, integrating secure EVM components.",
    tags: ["Solidity", "Hardhat", "TypeScript", "Ethereum"],
  },
  {
    role: "Backend Developer",
    company: "TechNova",
    status: "2021 – 2023",
    description:
      "Built scalable microservices and APIs for fintech applications using Rust and PostgreSQL.",
    tags: ["Rust", "PostgreSQL", "Docker", "gRPC"],
  },
];

const Projects = () => {
  return (
    <div className="experience w-full md:px-4   ">
      <Heading
        title="Projects"
        desc="A collection of my work spanning from blockchain applications to full-stack projects, both personal and professional."
      />
      <div className="w-full flex flex-wrap  gap-4 ">

      {experiences.map((exp) => (
          <ProjectCard key={exp.role} {...exp} />
        ))}
        </div>
    </div>
  );
}

export default Projects