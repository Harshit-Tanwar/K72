import React from "react";
import Video from "./Video.jsx";
const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-3">
      <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[8.5vw]">
       The spark for
      </div>
      <div className="text-[9.5vw] flex items-start justify-center uppercase leading-[8.5vw]">
         all
        <div className="h-[7vw] w-[15vw] rounded-full overflow-hidden">
          <Video />
        </div>
       things
      </div>
      <div className="text-[9.5vw] flex items-center justify-center uppercase leading-[8.5vw]">
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
