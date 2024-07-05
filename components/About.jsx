import { montserrat_alternates, sacramento } from "@/fonts";
import ProjectCards from "@/components/ui/ProjectCards";

function About() {
  return (
    <div
      id="about"
      className="about relative flex flex-col w-screen h-[65vh] md:h-[80v] px-4 py-16 md:flex-row md:px-[50px] lg:px-[150px] lg:pr-[100px] pointer-events-none"
    >
      <div
        className={`${montserrat_alternates.className} flex flex-col flex-1 items-center md:items-start`}
      >
        <span
          className={`${sacramento.className} mb-10 text-3xl md:text-3xl lg:text-4xl -rotate-[12deg] mt-9`}
        >
          Hey mate! I&apos;m
        </span>
        <h1
          className={`text-4xl mb-3 font-medium md:text-6xl lg:text-7xl md:mt-[30px] md:text-nowrap`}
        >
          Chrys {"{ca.io}"}
        </h1>
        <span className={`text-base md:text-xl`}>
          Full-Stack <b className="text-[#61cc9c]">Ctrl + C </b> De
          <b className="text-[#61cc9c]">V</b>eloper
        </span>
      </div>

      <div
        className="hidden md:flex flex-1 items-center justify-center lg:gap-8 overflow-hidden"
        style={{
          maskImage: "radial-gradient(circle, black, transparent)",
        }}
      >
        <ProjectCards />
      </div>
    </div>
  );
}

export default About;
