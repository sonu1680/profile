import React from "react";
import Overlay from "@/components/Overlay";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";



const page = () => {
  return (
    <Overlay>
      <div className="layer flex w-full md:w-6/12 z-10 mb-10 justify-center items-center flex-col gap-y-4 mt-10 px-4">
        <About />
        <Experience />
        <Projects />
        <Skills/>
      </div>
    </Overlay>

     
  );
};

export default page;
