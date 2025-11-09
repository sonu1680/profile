import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

interface SocialIconProps {
  title: string;
  link?:string
}

const SocialIcon: React.FC<SocialIconProps> = ({ title,link }) => {
  const icons = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
    twitter: Twitter,
  };

  const Icon = icons[title.toLowerCase() as keyof typeof icons];

  if (!Icon) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className="p-2 rounded-full bg-transparent  cursor-pointer hover:bg-gray-600 hover:border-gray-300 transition-all duration-300 ease-in "
            aria-label={title}
          >
            <a href={link}>
              <Icon size={25} className=" hover:text-blue-600" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SocialIcon;
