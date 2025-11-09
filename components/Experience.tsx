import React from 'react'
import Heading from './Heading';
import ExperienceCard from './Card';
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
const Experience = () => {
  return (
    <div className="experience w-full md:px-4  ">
      <Heading
        title="experience"
        desc="Here's a timeline of my professional journey, showcasing my roles and contributions in blockchain and full-stack development."
      />
      {experiences.map((exp) => (
          <ExperienceCard {...exp} key={exp.company} />
      ))}
    </div>
  );
}

export default Experience