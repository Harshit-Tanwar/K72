import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "/src/components/images/1.jpg",
    "/src/components/images/2.jpg",
    "/src/components/images/3.jpg",
    "/src/components/images/4jpg",
    "/src/components/images/5.jpg",
    "/src/components/images/6.jpg",
    "/src/components/images/7.jpg",
    "/src/components/images/8.jpg",
    "/src/components/images/9.jpg",
    "/src/components/images/10.jpg",
    "/src/components/images/11.jpg",
    "/src/components/images/12.jpg", 
    "/src/components/images/13.jpg",
    "/src/components/images/14.jpg",
    
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
    <div className="text-black">
      <div className="section1 py-1 px-2">
        <div
          ref={imageDivRef}
          className="absolute lg:h-[19.7vw] lg:w-[14.8vw] h-[25vw] w-[20vw] left-[27vw]  lg:top-[23%] lg:left-[30.5vw] lg:rounded-3xl rounded-2xl overflow-hidden"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2]">
          <div className=" lg:mt-[56vh] mt-[28vh]">
            <h1 className="lg:text-[19.5vw] text-[18vw] text-center uppercase leading-[17vw]">
              SEVEN7Y <br />
              TWO
            </h1>
            <div className=" lg:pl-[40%] lg:mt-0 mt-[100px]">
              <p className="lg:text-[3.8vw] text-[5.5vw] px-1  lg:leading-[4vw] leading-5.5 font-[font2]">
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
        <div className="lg:mt-50 my-25 font-[font2]">
          <div className="flex lg:px-[10.7vw] text-[18px] lg:mb-40">
            <div className="lg:w-[37%] w-1/2">
              <h3>Expertise</h3>
            </div>
            <div className="lg:leading-[1.8vw] leading-6 lg:w-[63%] w-1/2">
              <ul>
                <li>Strategy</li>
                <li>Advertising</li>
                <li>Branding</li>
                <li>Design</li>
                <li>Content</li>
              </ul>
            </div>
          </div>
          <div className="lg:flex lg:px-[10.7vw] my-20 lg:text-[1.4vw] text-[18px] gap-15 lg:leading-[1.6vw] leading-6">
            <div className="lg:w-[55%] mb-10">
              <p>
                Our Work_ Born in curiosity, raised by dedication and fed with a
                steady diet of creativity.
              </p>
            </div>
            <div className="lg:w-[60%] mb-10">
              <p>
                Our Creative_ Simmering in an environment where talent can come
                to a full boil. Encouraged to become the best versions of
                ourselves.
              </p>
            </div>
            <div className="lg:w-[45%] mb-10">
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
