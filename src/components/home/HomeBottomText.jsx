import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex justify-center items-center gap-6">
      <div className="border-3 h-25 flex items-center justify-center rounded-full px-9 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[7vw] mt-5" to={"/projects"}>
          Work
        </Link>
      </div>
      <div className="border-3 h-25 flex items-center justify-center rounded-full px-8 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]">
        <Link className="text-[7vw] mt-5" to={"/agence"}>
          Agency
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
