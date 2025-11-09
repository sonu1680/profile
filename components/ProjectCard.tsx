import { Briefcase } from "lucide-react";
import Tags from "./Tags";

export interface Experience {
  role: string;
  company: string;
  status: string;
  description: string;
  tags: string[];
}

export default function ProjectCard({
  role,
  description,
  tags,
}: Experience) {
  return (
    <div className="bg-[#111] border border-[#222] rounded-xl p-5  w-full  sm:w-[47%]  shadow-lg z-10 mb-2 ">
      <div className="flex items-center gap-2">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-white font-semibold text-lg">{role}</h2>
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-sm mt-3">{description}</p>

      <Tags tags={tags} />
    </div>
  );
}
