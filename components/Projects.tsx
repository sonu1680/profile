import React from 'react'
import Heading from './Heading';
import ProjectCard from './ProjectCard';

export const projects = [
  {
    title: "TeachCares MIS System",
    description:
      "A full-stack school management system with modules for attendance, scheduling, exams, and faculty dashboards. Includes Docker-based deployment and CI/CD pipelines on AWS.",
    tags: [
      "Next.js",
      "Node.js",
      "Express",
      "TypeScript",
      "Docker",
      "AWS",
      "CI/CD",
    ],
    link: "https://teachcares.sonupandit.in",
  },
  {
    title: "Cricket Fantasy App",
    description:
      "A real-time fantasy cricket platform supporting 100K+ users with live data updates every second, admin panel for contests, and smart team analytics.",
    tags: [
      "React Native",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Socket.io",
    ],
    link: "https://www.whatsspot.in",
  },
  {
    title: "SolLink",
    description:
      "A Solana-based dApp that enables users to send and receive cryptocurrency via shareable links with Phantom wallet integration and secure transaction signing.",
    tags: ["Next.js", "Solana", "TypeScript", "Web3.js", "Phantom Wallet"],
    link: "https://sollink.sonupandit.in",
  },
  {
    title: "UptimeGuard",
    description:
      "A distributed website uptime monitoring tool that processes 10,000+ checks per minute using Redis queues and PostgreSQL for real-time status tracking.",
    tags: ["Next.js", "Node.js", "Redis", "PostgreSQL", "Prisma", "Docker"],
    link: "https://uptimeguard.sonupandit.in",
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
        {projects.map((exp,idx) => (
          <ProjectCard key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
}

export default Projects