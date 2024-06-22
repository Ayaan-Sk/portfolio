import CardCorners from "@/components/ui/CardCorners";

function ProjectCard() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="relative md:w-[250px] md:h-[400px] lg:w-[300px] lg:h-[500px] flex-grow bg-black/[80%] border border-white-[1%]">
          <CardCorners />
        </div>

        <div className="relative md:w-[250px] md:h-[400px] lg:w-[300px] lg:h-[500px] flex-grow bg-black/[80%] border border-white-[1%]">
          <CardCorners />
        </div>

        <div className="relative md:w-[250px] md:h-[400px] lg:w-[300px] lg:h-[500px] flex-grow bg-black/[80%] border border-white-[1%]">
          <CardCorners />
        </div>
      </div>

      <div className="hidden lg:flex flex-col gap-8">
        <div className="relative  lg:w-[300px] lg:h-[500px] flex-grow bg-black/[80%] border border-white-[1%]">
          <CardCorners />
        </div>

        <div className="relative  lg:w-[300px] lg:h-[500px] flex-grow bg-black/[80%] border border-white-[1%]">
          <CardCorners />
        </div>

        <div className="relative  lg:w-[300px] lg:h-[500px] flex-grow bg-black/[80%] border border-white-[1%]">
          <CardCorners />
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
