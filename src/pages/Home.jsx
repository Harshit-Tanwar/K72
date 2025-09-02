import React from "react";
import Video from "../components/home/Video.jsx";
import HomeHeroText from "../components/home/HomeHeroText.jsx";
import HomeBottomText from "../components/home/HomeBottomText.jsx";

const Home = () => {
  return (
    <div className="">
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="relative h-screen w-screen flex flex-col justify-between m-0 p-0">
        <HomeHeroText />
        <div className="absolute w-[19.5vw] right-[0.6vw] bottom-[17vh] text-white font-[font2] leading-[1.5vw] text-[14px]">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that builds brands from every angle. Today,
            tomorrow and years from now. We think the best sparks fly when
            comfort zones get left behind and friction infuses our strategies,
            brands and communications with real feeling. We’re transparent,
            honest and say what we mean, and when we believe in something, we’re
            all in
          </p>
        </div>
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
