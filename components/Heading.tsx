import React from "react";

interface HeadingProps {
  title: string;
  desc: string;
}

const Heading: React.FC<HeadingProps> = ({ title, desc }) => {
  return (
    <div className="container font-bold capitalize text-start space-y-4 mb-8">
      <p className="text-blue-500 text-2xl ">{title}</p>
      <p className="text-gray-400 font-normal text-xs md:text-sm ">{desc}</p>
    </div>
  );
};

export default Heading;
