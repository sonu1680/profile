import { Briefcase } from "lucide-react";
import Tags from "./Tags";

export interface Experience {
  role: string;
  company: string;
  status: string;
  description: string;
  tags: string[];
}

export default function ExperienceCard({
  role,
  company,
  status,
  description,
  tags,
}: Experience) {
  return (
    <div className="bg-[#111] border border-[#222] rounded-xl p-5 w-full  shadow-lg z-10 mb-6">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-[#1a1a1a] rounded-lg">
          <Briefcase size={20} className="text-blue-400" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-white font-semibold text-lg">{role}</h2>
            <span className="text-gray-500">•</span>
            <p className="text-gray-400 text-sm">{company}</p>
          </div>
          <p className="text-gray-500 text-sm">{status}</p>
        </div>
      </div>

      <p className="text-gray-400 text-sm mt-3">{description}</p>

      <Tags tags={tags} />
    </div>
  );
}
