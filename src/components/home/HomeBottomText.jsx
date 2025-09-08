import React, { useContext } from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex justify-center items-center gap-6">
      <div className="border-2 lg:h-25 h-12 flex items-center justify-center rounded-full lg:px-9 px-3 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="lg:text-[7vw] text-[10vw] lg:mt-5 mt-2" to={"/projects"}>
          Work
        </Link>
      </div>
      <div className="border-2 lg:h-25 h-12 flex items-center justify-center rounded-full lg:px-8 px-3 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link
          className="lg:text-[7vw] text-[10vw] lg:mt-5 mt-2" to={"/agence"}>
          Agency
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
