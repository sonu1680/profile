import React from "react";
import { GridBackgroundDemo } from "./Background";

const Overlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <GridBackgroundDemo>
      <div className="layer bg-black/80 z-10  flex flex-col justify-center items-center ">{children}</div>
    </GridBackgroundDemo>
  );
};

export default Overlay;
