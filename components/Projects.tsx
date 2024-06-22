import { montserrat_alternates, poiret_one } from "@/fonts";

function Projects() {
  return (
    <div className="relative w-screen flex flex-col items-center lg:pb-10 lg:pt-[200px] gap-8 py-10">
      <div
        className={`${poiret_one.className} flex flex-col items-center text-2xl gap-2`}
      >
        <span className="opacity-80">a gallery of my</span>
        <h1
          className={`${montserrat_alternates.className} text-lg md:text-4xl font-medium`}
        >
          recent projects
        </h1>
      </div>
      <div className="relative flex items-center w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute left-0 w-full h-full before:absolute before:content-[''] before:top-0 before:left-[50%] before:-translate-x-[50%] before:w-[110%] before:h-[30%] before:rounded-[100%] before:translate-y-[-70%] before:bg-black before:z-10 before:bg-blend-color-burn after:absolute after:content-[''] after:bottom-0 after:left-[50%] after:-translate-x-[50%] after:w-[110%] after:h-[30%] after:rounded-[100%] after:translate-y-[70%] after:bg-black after:z-10"></div>

        <div
          className="relative flex items-center w-full h-full gap-[5%] overflow-hidden overflow-x-scroll"
          style={{
            scrollSnapType: "x mandatory",
          }}
        >
          <div></div>

          <div className="min-w-[100%] h-full bg-[#61cc9c] snap-center"></div>
          <div className="min-w-[100%] h-full bg-[#61cc9c] snap-center"></div>
          <div className="min-w-[100%] h-full bg-[#61cc9c] snap-center"></div>
          <div className="min-w-[100%] h-full bg-[#61cc9c] snap-center"></div>
          <div className="min-w-[100%] h-full bg-[#61cc9c] snap-center"></div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
