import React from 'react'
import Heading from './Heading';
import ExperienceCard from './Card';
export const experiences = [
  {
    role: "Backend Engineer",
    company: "Celebal Technologies",
    status: "2025 – 2025",
    description:
      "Build a infracture for realtime communication using nodejs and websockets.",
    tags: ["Websocket", "Express.js", "Node.js", "Next.js"],
  },
  {
  role: "Software Engineer",
  company: "TeachCares",
  status: "2024 – 2025",
  description:
    "Led the development of the TeachCares MIS System — a full-stack platform designed to digitalize school management, including attendance, scheduling, exams, and faculty dashboards. Built a scalable backend architecture using Node.js, Express, and TypeScript with Docker-based multi-stage deployments on AWS. Implemented a robust GitHub Actions CI/CD pipeline for automated testing and deployment, ensuring smooth and reliable production releases.",
  tags: ["Node.js", "Express.js", "TypeScript", "Next.js", "Docker", "AWS", "CI/CD","Prisma"],
}
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