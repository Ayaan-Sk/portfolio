import { morona, sacramento } from "@/fonts";
import {
  BackEndSkills,
  FrontEndSkills,
  dbSkills,
  otherSkills,
} from "@/lib/utils";
import SkillRow from "./SkillRow";
import { TextRevealCard } from "./TextRevealCard";

function SkillsAndServices() {
  return (
    <div className="relative min-h-[100vh] w-screen lg:py-[150px] lg:pb-10 flex flex-col justify-around items-center">
      <div
        id="skills"
        className="flex flex-col w-full items-center gap-4 mt-24 md:gap-8 skew-y-12 bg-[#61cc9c] py-10"
      >
        <div className="flex flex-col w-full lg:w-[70%] md:gap-8 items-center">
          <SkillRow skills={FrontEndSkills} reverse={false}></SkillRow>
          <SkillRow skills={BackEndSkills} reverse={true}></SkillRow>
          <SkillRow skills={dbSkills} reverse={false}></SkillRow>
          <SkillRow skills={otherSkills} reverse={true}></SkillRow>
        </div>
      </div>

      <div
        id="services"
        className="flex flex-col w-full md:w-[80vw] items-center gap-2 md:gap-12 mt-28"
      >
        <h1 className={`${morona.className} text-2xl px-4`}>Services</h1>

        <div className="flex flex-wrap justify-center gap-4 max-w-full px-4">
          <TextRevealCard service="Web Development" />
          <TextRevealCard service="App Development" />
        </div>
      </div>
    </div>
  );
}

export default SkillsAndServices;
