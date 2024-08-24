import {
  montserrat_alternates,
  poppins,
  sacramento,
  stretch,
} from "@/lib/fonts";
import AboutCard from "@/components/ui/AboutCard";
import Image from "next/image";
import StoryAndDetailsCard from "@/components/StoryAndDetailsCard";
import me from "@/public/me.jpg";

function About() {
  return (
    <div
      id="about"
      className="relative flex flex-col w-screen md:max-lg:h-screen lg:h-[80vh] xl:h-[90vh] px-2 py-16 pb-0 lg:flex-row md:px-[50px] lg:px-[40px] xl:px-[100px] xl:pl-[80px] 2xl:px-[180px] 2xl:pl-[180px] gap-8 md:gap-0"
    >
      <div className={`flex md:flex-1 flex-col items-center md:items-start`}>
        <div className="flex flex-1 w-full gap-4">
          <div className="w-[2px] h-full bg-slate-200 rounded-lg ml-4"></div>

          <div className={`hidden sm:flex flex-col mt-6`}>
            <h2
              className={`${montserrat_alternates.className} text-xl font-medium`}
            >
              Quick Tip:
            </h2>
            <span className={`${poppins.className} max-w-[70%]`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              eligendi beatae repellendus sint in eos!
            </span>
          </div>
        </div>

        <span
          className={`${sacramento.className} mb-4 md:mb-8 text-2xl mt-9 md:text-4xl`}
        >
          Hey mate! I&apos;m
        </span>
        <h1
          className={`${stretch.className} text-4xl mb-5 font-semibold md:text-6xl 2xl:text-7xl md:text-nowrap`}
        >
          Chrys {"{ca.io}"}
        </h1>
        <span
          className={`text-base md:text-xl ${montserrat_alternates.className}`}
        >
          Full-Stack <b className="text-[#61cc9c]">Ctrl + C </b> De
          <b className="text-[#61cc9c]">V</b>eloper 😎
        </span>
      </div>

      <div className="relative min-h-[60vh] md:min-h-fit md:flex mt-[300px] md:mt-0 flex-1 mx-auto lg:ml-auto items-center justify-center lg:gap-8 md:px-2 w-full">
        <AboutCard detailsCard={false}>
          <Image
            height={100}
            width={100}
            className="test-card absolute w-full h-full top-0 left-0 object-cover"
            src={me}
            alt="me"
          />
        </AboutCard>

        <AboutCard
          detailsCard={true}
          className="details-card top-[40%] right-0 md:top-auto"
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
