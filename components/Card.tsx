import { Briefcase, Globe } from "lucide-react";
import Tags from "./Tags";

export interface Experience {
  role: string;
  company: string;
  status: string;
  description: string;
  tags: string[];
  link?: string; 
}

export default function ExperienceCard({
  role,
  company,
  status,
  description,
  tags,
  link,
}: Experience) {
  return (
    <div className="bg-[#111] border border-[#222] rounded-xl p-5 w-full shadow-lg z-10 mb-6 hover:-translate-y-1 transition-transform duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
          <div className="shrink-0 p-2 bg-[#1a1a1a] rounded-lg flex justify-center items-center">
            <Briefcase size={20} className="text-blue-400" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h2 className="text-white font-semibold text-lg">{role}</h2>
            <span className="hidden sm:inline text-gray-500">•</span>
            <p className="text-gray-400 text-sm">{company}</p>
          </div>
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold text-white bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded transition-all cursor-pointer duration-300 mt-2 sm:mt-0"
          >
            <Globe size={12} /> Website
          </a>
        )}
      </div>

      <p className="text-gray-400 text-sm mt-2">{status}</p>

      <p className="text-gray-400 text-sm mt-3">{description}</p>

      <div className="mt-3">
        <Tags tags={tags} />
      </div>
    </div>
  );
}
