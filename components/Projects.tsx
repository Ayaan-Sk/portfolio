import { montserrat_alternates, poiret_one, poppins } from "@/fonts";
import { projects } from "@/lib/utils";

function Projects() {
  return (
    <div
      id="projects"
      className="relative w-screen min-h-[100vh] flex flex-col items-center justify-center py-10 md:py-20 md:pb-10 lg:pt-[80px] gap-8"
    >
      <div
        className={`${poiret_one.className} flex flex-col items-center text-2xl`}
      >
        <span className="opacity-80">collection of my</span>
        <h1
          className={`${montserrat_alternates.className} text-3xl md:text-4xl font-medium`}
        >
          recent projects
        </h1>
      </div>
      <div className="relative flex items-center w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden translate-y-[-20px]">
        <div className="absolute left-0 w-full h-full before:absolute before:content-[''] before:top-0 before:left-[50%] before:-translate-x-[50%] before:w-[110%] before:h-[30%] before:rounded-[100%] before:translate-y-[-70%] before:bg-black before:z-10 before:bg-blend-color-burn after:absolute after:content-[''] after:bottom-0 after:left-[50%] after:-translate-x-[50%] after:w-[110%] after:h-[30%] after:rounded-[100%] after:translate-y-[70%] after:bg-black after:z-10"></div>

        <div
          className="relative flex items-center w-full h-full gap-[5%] overflow-hidden overflow-x-scroll"
          style={{
            scrollSnapType: "x mandatory",
          }}
        >
          <div></div>

          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[100%] h-full bg-[#61cc9c] snap-center flex flex-col items-center py-[150px]"
            >
              <h1
                className={`text-6xl text-white/[70%] font-bold ${montserrat_alternates.className}`}
              >
                {project.name}
              </h1>
              <span className="text-base text-black/[60%] mt-4">
                {project.description}
              </span>
            </div>
          ))}

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
