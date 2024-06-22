import {
  great_vibes,
  montserrat_alternates,
  poiret_one,
  sacramento,
  stretch,
} from "@/fonts";
import { FancyButton } from "./ui/FancyButton";
import HeroSnapBorders from "./ui/HeroSnapBorders";

function Hero() {
  return (
    <div
      id="hero"
      className="relative flex flex-col min-h-[100vh]  px-2 items-center w-screen"
    >
      <HeroSnapBorders />

      <div className="relative flex flex-col items-center w-fit pt-[120px] lg:pt-[150px]">
        <span className={`text-base md:text-lg text-gray-400 mb-4`}>ca.io</span>
        <div className="flex flex-col items-center gap-4">
          <h1
            className={`${stretch.className} text-4xl md:text-7xl lg:text-8xl`}
          >
            mmoodeern
          </h1>

          <div className="w-full flex items-center gap-8">
            <span
              className={`${montserrat_alternates.className} text-center text-2xl md:text-6xl lg:text-[60px] gap-4`}
            >
              problems require
            </span>
            <div className="h-2 flex-1 bg-gray-50 rounded-lg"></div>
          </div>

          <div className="relative">
            <span
              className={`${stretch.className} text-4xl md:text-7xl lg:text-8xl`}
            >
              opptimaLL
            </span>{" "}
            <span
              className={`${sacramento.className} absolute bottom-2 right-0 text-3xl md:text-6xl lg:text-[80px]`}
            >
              solutions
            </span>
          </div>
        </div>
      </div>

      <FancyButton />

      <div
        className={`${montserrat_alternates.className} text-base flex flex-col items-center gap-2 mt-auto mb-auto z-10`}
      >
        <span className="font-medium">Come Along</span>
        <div className="rotate-90">~&gt;</div>
      </div>
    </div>
  );
}

export default Hero;
