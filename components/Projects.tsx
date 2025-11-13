import React from 'react'
import Heading from './Heading';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/const';



const Projects = () => {
  return (
    <div className="experience w-full md:px-4   ">
      <Heading
        title="Projects"
        desc="A collection of my work spanning from blockchain applications to full-stack projects, both personal and professional."
      />
      <div className="w-full flex flex-wrap  gap-4 ">
        {PROJECTS.map((exp, idx) => (
          <ProjectCard key={idx} {...exp} />
        ))}
      </div>
    </div>
  );
}

export default Projects