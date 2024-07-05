import { montserrat_alternates, sacramento } from "@/fonts";
import { CanvasRevealCard } from "./CanvasRevealCard";
import {
  BackEndSkills,
  FrontEndSkills,
  dbSkills,
  otherSkills,
} from "@/lib/utils";
import Image from "next/image";

function SkillsAndServices() {
  return (
    <div className="relative min-h-[100vh] w-screen lg:py-[150px] lg:pb-10 flex flex-col justify-around">
      <div className="flex flex-col items-center gap-4 mt-24 md:gap-8 skew-y-12 bg-[#61cc9c] py-10">
        <h1
          className={`text-xl text-black font-medium ${montserrat_alternates.className}`}
        >
          Technical Skills
        </h1>

        <div className="flex flex-col w-full lg:w-[70%] md:gap-8 items-center">
          <SkillRow
            count={FrontEndSkills.length}
            skills={FrontEndSkills}
            reverse={false}
          ></SkillRow>

          <SkillRow
            count={BackEndSkills.length}
            skills={BackEndSkills}
            reverse={true}
          ></SkillRow>

          <SkillRow
            count={dbSkills.length}
            skills={dbSkills}
            reverse={false}
          ></SkillRow>

          <SkillRow
            count={otherSkills.length}
            skills={otherSkills}
            reverse={true}
          ></SkillRow>
        </div>
      </div>

      <div className="flex flex-col w-full items-center gap-2 md:gap-12 mt-32">
        <h1 className={`${sacramento.className} text-5xl`}>Services</h1>
        <CanvasRevealCard />
      </div>
    </div>
  );
}

export default SkillsAndServices;

function SkillRow({
  count,
  skills,
  reverse,
}: {
  count: number;
  skills: any;
  reverse: boolean;
}) {
  return (
    <div
      className={`relative h-[100px] w-[750px] md:w-[1250px] flex items-center overflow-hidden`}
      style={{
        maskImage: "radial-gradient(circle, black, transparent)",
      }}
    >
      {skills.map((skill: { name: string; img: string }, index: number) => (
        <div
          key={index}
          className={`absolute ${
            reverse
              ? "right-[100%] animate-animateSkillsReverse"
              : "left-[100%] animate-animateSkills"
          } h-[80px] md:h-[100px] w-[150px] md:w-[250px] bg-black rounded-lg border border-white/[20%] flex items-center justify-center`}
          style={{
            boxShadow: "0 10px 24px -20px #61cc9c",
            animationDelay: `${(index * 60) / count}s`,
          }}
        >
          <h1 className="z-10">{skill.name}</h1>
          <Image
            src={skill.img}
            alt="skill-logo"
            height={100}
            width={100}
            className="absolute left-2 h-[80%] object-contain opacity-60"
          />
        </div>
      ))}
    </div>
  );
}
