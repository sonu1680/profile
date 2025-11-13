import { Globe, MoveUpRight } from "lucide-react";
import Tags from "./Tags";

export interface Experience {
  title: string;
  description: string;
  tags: string[];
  link:string,
  color:string,
  type:string
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  color ,
  type
}: Experience) {
  return (
    <div
      className={`bg-[#111]  border border-[#222] rounded-xl p-5 cursor-pointer w-full  sm:w-[47%]  shadow-lg z-10 mb-2  ${color}
      `}
    >
      <div className="flex items-center gap-2">
        <div className=" w-full">
          <div className="flex flex-row justify-between w-full gap-2">
            <div className="title flex flex-row  justify-center items-center gap-2">
              <h2 className="text-white font-semibold text-lg">{title}</h2>
              <div className="text-white font-semibold text-xs border border-gray-600 rounded-xl  capitalize p-1 px-2 bg-gray-800">{type}</div>
            </div>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className=" border border-transparent rounded-md px-2 py-1 flex items-center justify-center cursor-pointer hover:border-gray-500 hover:bg-gray-700 transition-all duration-300"
            >
              <div className="text-white  flex flex-row gap-x-2 justify-center items-center font-semibold text-xs tracking-wide   ">
                Visit
                <MoveUpRight size={10} />
              </div>
            </a>
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-sm mt-3">{description}</p>

      <Tags tags={tags} />
    </div>
  );
}
