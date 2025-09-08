import ProjectCard from "../components/projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const card = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/BEST/BEST_site_Thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from(".cards", {
      height: "100px",
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: ".all-cards",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div>
      <div className="lg:p-3">
        <div className="lg:pt-[40vh] pt-[45vh]">
          <h2 className="lg:text-[13vw] text-[20vw] text-black font-[font1]">
            WORK
          </h2>
        </div>
        <div className="lg:-mt-20 -mt-8 all-cards">
          {card.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="cards flex lg:flex-row flex-col lg:h-[400px] h-[600px] lg:mb-2 w-full lg:gap-2"
              >
                <ProjectCard image1={elem.image1} image2={elem.image2} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full lg:h-[60vh] h-[90vh] font-[font2] bg-black flex flex-col lg:justify-between uppercase p-3">
        <div className="flex lg:flex-row flex-col justify-between lg:h-[14vh] h-[60vh] lg:text-[5vw] text-[8.5vw]">
          <div className="flex lg:gap-2 gap-1">
            <div className="border-2 hover:text-[#D3FD50] rounded-full lg:leading-[45px]  mb-8 leading-[25px] cursor-pointer">
              <h1 className="lg:px-6 lg:mt-3 px-3 mt-1">FB</h1>
            </div>
            <div className="border-2 hover:text-[#D3FD50] rounded-full lg:leading-[45px]  mb-8 leading-[25px] cursor-pointer">
              <h1 className="lg:px-6 lg:mt-3 px-3 mt-1">IG</h1>
            </div>
            <div className="border-2 hover:text-[#D3FD50] rounded-full lg:leading-[45px]  mb-8 leading-[25px] cursor-pointer">
              <h1 className="lg:px-6 lg:mt-3 px-3 mt-1">IN</h1>
            </div>
            <div className="border-2 hover:text-[#D3FD50] rounded-full lg:leading-[45px]  mb-8 leading-[25px] cursor-pointer">
              <h1 className="lg:px-6 lg:mt-3 px-3 mt-1">BE</h1>
            </div>
          </div>
            <div className="border-2 hover:text-[#D3FD50] rounded-full leading-[45px] mb-8 cursor-pointer lg:text-[5vw] text-[15vw]">
              <h1 className="lg:px-6 lg:mt-3 px-10 mt-2">Contact</h1>
            </div>
        </div>
        <div className="mt-25">
           <div className="flex lg:flex-row flex-col lg:items-center justify-center lg:gap-8 lg:text-sm text-[10px]">
            <a href="" className="hover:text-[#D3FD50]">Privacy Policy</a>
            <a href="" className="hover:text-[#D3FD50]">Privacy Notice</a>
            <a href="" className="hover:text-[#D3FD50]">Ethics Report</a>
            <a href="" className="hover:text-[#D3FD50]">Consent Choices</a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
