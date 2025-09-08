import React from "react";
import Video from "./Video.jsx";
const HomeHeroText = () => {
  return (
    <div className="font-[font1] lg:pt-3 pt-[75vw] lg:text-[9.5vw] text-[12.2vw] lg:leading-[8.5vw] leading-[10.5vw]">
      <div className="flex justify-center items-center uppercase ">
       The spark for
      </div>
      <div className="flex items-start justify-center uppercase">
         all
        <div className="lg:h-[7vw] lg:w-[15vw] h-[9vw] w-[20vw] rounded-full overflow-hidden">
          <Video />
        </div>
       things
      </div>
      <div className="flex items-center justify-center uppercase">
        creative
      </div>
    </div>  
  );
};

export default HomeHeroText;
