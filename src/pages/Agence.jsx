import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "http://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
  ];
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 23%",
        end: "top -150%",
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });
  return (
    <div className="">
      <div className="section1 py-1 bg-white text-black">
        <div
          ref={imageDivRef}
          className="absolute h-[19.7vw] w-[14.8vw] top-[23%] left-[30.5vw] rounded-3xl overflow-hidden"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className=" mt-[56vh]">
            <h1 className="text-[19.5vw] text-center uppercase leading-[17vw]">
              SEVEN7Y <br />
              TWO
            </h1>
            <div className=" pl-[40%] ">
              <p className="text-[3.8vw]  leading-[4vw] font-[font2]">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                We’re inquisitive and open-minded, and we make sure creativity
                crowds out ego from every corner. A brand is a living thing,
                with values, a personality and a story. If we ignore that, we
                can achieve short-term success, but not influence that goes the
                distance. We bring that perspective to every brand story we help
                tell.
              </p>
            </div>
          </div>
        </div>
        <div className="my-50  font-[font2]">
          <div className="flex px-[10.7vw] text-[20px] mb-40">
            <div className=" w-[37%]">
              <h3>Expertise</h3>
            </div>
            <div className="leading-[1.8vw] w-[63%]">
              <ul>
                <li>Strategy</li>
                <li>Advertising</li>
                <li>Branding</li>
                <li>Design</li>
                <li>Content</li>
              </ul>
            </div>
          </div>
          <div className="flex px-[10.7vw] mt-20 text-[1.5vw] gap-15 mb-50 leading-[1.8vw]">
            <div className="w-[55%] ">
              <p>
                Our Work_ Born in curiosity, raised by dedication and fed with a
                steady diet of creativity.
              </p>
            </div>
            <div className="w-[60%]">
              <p>
                Our Creative_ Simmering in an environment where talent can come
                to a full boil. Encouraged to become the best versions of
                ourselves.
              </p>
            </div>
            <div className="w-[45%]">
              <p>
                Our Culture_ We’re open to each other. Period. The team works
                together to create a space that makes us proud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agence;
