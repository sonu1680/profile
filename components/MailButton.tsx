"use client";

import { Download, Mail, Notebook } from "lucide-react";
import { Button } from "./ui/button";

const MailButton = () => {
  const handleMailClick = () => {
    window.location.href =
      "mailto:sonukumar@example.com?subject=Contact%20Request&body=Hi%20Sonu%2C%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you.";
  };

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1OeIIhH1BxAakn49Ha8hPCpbTtAXJA6yl/view?usp=sharing",
      "_blank"
    );
  };
  const handleNotion = () => {
    window.open(
      "https://dear-foam-0d1.notion.site/SONU-KUMAR-PANDIT-1f72c54891c080d3bde4d0258514a5fa?pvs=4",
      "_blank"
    );
  };

  
  https: return (
    <div className="contact flex flex-row md:flex-wrap gap-4 justify-start mt-4  ">
      <Button
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl shadow-md transition-all duration-300 hover:scale-105 cursor-pointer text-xs md:text-sm "
        onClick={handleMailClick}
      >
        <Mail /> Send a Mail
      </Button>

      <Button
        onClick={handleResumeDownload}
        className="px-6  py-3 bg-linear-to-r from-green-400 to-blue-500 text-white font-medium rounded-2xl shadow-md transition-all duration-300 hover:from-green-500 hover:to-blue-600 hover:scale-105 cursor-pointer text-xs md:text-sm"
      >
        <Download /> Resume
      </Button>

      <Button
        onClick={handleNotion}
        className="px-6  py-3 bg-linear-to-r from-gray-800 to-gray-500 text-white font-medium rounded-2xl shadow-md transition-all duration-300  hover:scale-105 cursor-pointer text-xs md:text-sm"
      >
        <Notebook /> Notion
      </Button>
    </div>
  );
};

export default MailButton;
