import Heading from './Heading';
import ExperienceCard from './Card';
import { EXPERIENCES } from '@/const';

const Experience = () => {
  return (
    <div className="experience w-full md:px-4  ">
      <Heading
        title="experience"
        desc="Here's a timeline of my professional journey, showcasing my roles and contributions in blockchain and full-stack development."
      />
      {EXPERIENCES.map((exp) => (
        <ExperienceCard {...exp} key={exp.company} />
      ))}
    </div>
  );
}

export default Experience