
const ProjectCard = (props) => {
  return (
    <>
      <div className="card lg:w-1/2 w-full h-full  hover:rounded-4xl overflow-hidden transition-all relative mb-2">
        <img className="w-full h-full object-cover" src={props.image1} alt="" />
        <div className="opacity-0 hover:opacity-100 absolute top-0 left-0 bg-black/30 w-full h-full flex justify-center items-center">
          <h2 className="uppercase text-[3.8vw] font-[font2] border rounded-full px-5 leading-[40px] pt-2">
            View Project
          </h2>
        </div>
      </div>
      <div className="card lg:w-1/2 w-full h-full hover:rounded-4xl overflow-hidden transition-all relative mb-2">
        <img className="w-full h-full object-cover" src={props.image2} alt="" />
        <div className="opacity-0 hover:opacity-100 absolute top-0 left-0 bg-black/30 w-full h-full flex justify-center items-center">
          <h2 className="uppercase text-[3.8vw] font-[font2] border rounded-full px-5 leading-[40px] pt-2">
            View Project
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
