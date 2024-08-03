import { montserrat_alternates, sacramento } from "@/fonts";
import AboutCard from "@/components/ui/AboutCard";
import Image from "next/image";
import StoryAndDetailsCard from "@/components/StoryAndDetailsCard";
import me from "@/public/me.jpg";

function About() {
  return (
    <div
      id="about"
      className="relative flex flex-col w-screen h-screen lg:h-[80vh] px-2 py-16 pb-0 lg:flex-row md:px-[50px] lg:px-[40px] xl:px-[180px] gap-8 md:gap-0"
    >
      <div
        className={`${montserrat_alternates.className} flex md:flex-1 flex-col items-center md:items-start pointer-events-auto`}
      >
        <span
          className={`${sacramento.className} mb-8 md:mb-12 text-3xl md:text-3xl lg:text-4xl -rotate-[12deg] mt-9`}
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

      <div className="relative md:flex flex-1 mx-auto lg:ml-auto items-center justify-center lg:gap-8 md:px-2 pointer-events-auto w-full">
        <AboutCard detailsCard={false}>
          <Image
            height={100}
            width={100}
            className="test-card absolute w-full h-full top-0 left-0 object-cover"
            src={me}
            alt="profile"
          />
        </AboutCard>

        <AboutCard
          detailsCard={true}
          className="details-card top-[40%] right-0 md:top-auto md:left-[60%]"
        >
          <span className="text-[#61cc9c] font-semibold text-base md:text-2xl">
            # Dev-101
          </span>

          <StoryAndDetailsCard />
        </AboutCard>
      </div>
    </div>
  );
}

export default About;
