import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext } from "react";
import { NavbarContext } from "../context/NavContext";

const FullScreenNav = () => {
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairs", {
      height: "100%",
      duration : 0.3,
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      duration : 0.3,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      duration: 0.3,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".stairs", {
      height: 0,
      duration : 0.3,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
  }
  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );
  return (
    <div className="fullscreennav  w-full h-screen absolute z-99">
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
         
            <div  className="stairs h-full lg:w-1/5 bg-black"></div>
            <div  className="stairs h-full lg:w-1/5 bg-black  w-1/2"></div>
            <div  className="stairs h-full lg:w-1/5 bg-black"></div>
            <div  className="stairs h-full lg:w-1/5 bg-black  w-1/2"></div>
            <div  className="stairs h-full lg:w-1/5 bg-black"></div>
         
        </div>
      </div>
      <div className="relative">
        <div className="navlink flex w-full justify-between p-2">
          <div className="p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="44"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="h-28 w-28 relative cursor-pointer"
          >
            <div className=" h-[140%] w-0.5 bg-[#D3FD50] absolute -rotate-45 origin-top"></div>
            <div className=" h-[140%]  w-0.5 bg-[#D3FD50] absolute rotate-45 origin-top right-0"></div>
          </div>
        </div>
        <div className="lg:mt-0 mt-[100px] font-[font2] lg:text-[8vw] text-[14vw] uppercase lg:leading-[6vw] leading-[13vw]">
          <div className="link origin-top border-t relative">
            <h1 className="lg:mt-5 mt-2 text-center">Work</h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap  lg:leading-[6vw]  lg:text-[8vw] leading-[13vw] lg:mt-5 mt-2 ">
                  See Everything
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-26 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw] lg:text-[8vw] leading-[13vw] lg:mt-5 mt-2 ">
                  See Everything
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw] lg:text-[8vw] leading-[13vw] lg:mt-5 mt-2 ">
                  See Everything
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-26 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw] lg:text-[8vw] leading-[13vw] lg:mt-5 mt-2 ">
                  See Everything
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-t relative">
            <h1 className="lg:mt-5 mt-2 text-center">Agency</h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw] lg:text-[8vw] leading-[13vw] lg:mt-5 mt-2 ">
                  Know Us
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg"
                  alt=""
                />
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw] lg:text-[8vw]  leading-[13vw] lg:mt-5 mt-2 ">
                  Know Us
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw] lg:text-[8vw]  leading-[13vw] lg:mt-5 mt-2 ">
                  Know Us
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/teamMembers/MEL_640X290-640x290.jpg"
                  alt=""
                />
                <h1 className="whitespace-nowrap lg:leading-[6vw] text-[14vw]  lg:text-[8vw]  leading-[13vw] lg:mt-5 mt-2 ">
                  Know Us
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-t-1 relative">
            <h1 className="lg:mt-5 mt-2 text-center">Contact</h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black text-[14vw] lg:text-[8vw]">
              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw] lg:text-[8vw] leading-[13vw] lg:mt-5 mt-2 ">
                  Send us a fax
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw] lg:text-[8vw]  leading-[13vw] lg:mt-5 mt-2 ">
                  Send us a fax
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw]   lg:text-[8vw] leading-[13vw] lg:mt-5 mt-2 ">
                  Send us a fax
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw]  lg:text-[8vw]  leading-[13vw] lg:mt-5 mt-2 ">
                  Send us a fax
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top border-y relative">
            <h1 className="lg:mt-5 mt-2 text-center">Blog</h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black ">
              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw]  lg:text-[8vw]  leading-[13vw] lg:mt-5 mt-2 ">
                  Read Articles
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                  alt=""
                />
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw]  lg:text-[8vw]  leading-[13vw] lg:mt-5 mt-2 ">
                  Read Articles
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw]  lg:text-[8vw]  leading-[13vw] lg:mt-5 mt-2 ">
                  Read Articles
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                  alt=""
                />
                <h1 className="whitespace-nowrap  lg:leading-[6vw] text-[14vw]  lg:text-[8vw]  leading-[13vw] lg:mt-5 mt-2 ">
                  Read Articles
                </h1>
                <img
                  className="lg:h-22 lg:w-60  h-12 w-30 shrink-0 rounded-full object-cover"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
