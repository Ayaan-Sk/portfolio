import { montserrat_alternates, poppins } from "@/fonts";
import CardCorners from "./CardCorners";
import { InteractiveGradientBg } from "@/components/ui/InteractiveGradientBg";
import { FancyButtonAlt } from "./FancyButton";
import { CopyIcon } from "@/lib/icons";

function BentoGrid() {
  return (
    <div className="flex flex-col md:grid grid-cols-6 grid-rows-2 lg:grid-rows-3 w-full flex-1 gap-4">
      <div className="flex flex-col items-center p-4 relative min-h-[200px] border border-white/[50%] bg-black/[70%] col-span-2">
        <CardCorners />
        <h1 className={`${montserrat_alternates.className}`}>Address</h1>
        <div className="flex flex-col items-center m-auto gap-2">
          <h1 className="text-2xl font-bold">Ghana ~ Accra</h1>
          <span className="text-gray-400">Satellite</span>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 relative min-h-[200px] border border-white/[50%] bg-black/[70%] col-span-2">
        <CardCorners />
        <h1 className={`${montserrat_alternates.className}`}>Education</h1>
        <div className="flex flex-col items-center m-auto gap-2">
          <h1 className="text-2xl font-bold text-center">
            BSc. Computer Science
          </h1>
          <span className="text-center text-gray-400">
            Ghana Communication Technology University
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start p-4 relative min-h-[200px] border border-white/[50%] col-span-2 gap-8">
        <CardCorners />
        <InteractiveGradientBg />

        <h1 className={`relative ${poppins.className} whitespace-nowrap`}>
          Tech Stack
        </h1>
        <span className="relative text-base">
          a result of <i>half-a-decade</i> of continuous learning and
          self-improvements
        </span>

        <div className="flex flex-col gap-2 mt-auto w-full">
          <div
            className="flex justify-between gap-2"
            style={{
              maskImage: "radial-gradient(circle, black, transparent)",
            }}
          >
            <div className="bg-black rounded-lg p-4 py-2 text-sm">React</div>
            <div className="bg-black rounded-lg p-4 py-2 text-sm">Nextjs</div>
            <div className="bg-black rounded-lg p-4 py-2 text-sm">Solid</div>
            <div className="bg-black rounded-lg p-4 py-2 text-sm">Nodejs</div>
            <div className="bg-black rounded-lg p-4 py-2 text-sm">Express</div>
            <div className="bg-black rounded-lg p-4 py-2 text-sm">MongoDB</div>
          </div>
          <div
            className="flex justify-between items-start gap-2 whitespace-nowrap"
            style={{
              maskImage: "radial-gradient(circle, black, transparent)",
            }}
          >
            <div className="bg-black rounded-lg p-4 py-2 text-sm">Postgres</div>
            <div className="bg-black rounded-lg p-4 py-2 text-sm">MySQL</div>
            <div className="bg-black rounded-lg p-4 py-2 text-sm">Blender</div>
            <div className="bg-black rounded-lg p-4 py-2 text-sm">Spline</div>
            <div className="bg-black rounded-lg p-4 py-2 text-sm">AWS</div>
            <div className="bg-black rounded-lg p-4 py-2 text-sm">
              Google cloud
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-4 relative min-h-[200px] border border-white/[50%] row-span-2 col-span-3">
        <CardCorners />
        <InteractiveGradientBg />
        <h1
          className={`relative ${montserrat_alternates.className} text-2xl md:text-5xl font-semibold`}
        >
          ~ connect
        </h1>
        <div className="relative flex gap-4 mt-6">
          <FancyButtonAlt icon={CopyIcon} title="Copy Email" />
          <div className="h-full aspect-square rounded-full bg-black flex items-center justify-center"></div>
          <div className="h-full aspect-square rounded-full bg-black flex items-center justify-center"></div>
          <div className="hidden md:flex h-full aspect-square rounded-full bg-black items-center justify-center"></div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 relative min-h-[200px] border border-white/[50%] row-span-2 col-span-3 lg:col-span-2 bg-black/[70%]">
        <CardCorners />
        <span>ca.io</span>

        <div className="relative flex flex-col items-center my-auto">
          <h1
            className={`${montserrat_alternates.className} text-base md:text-2xl text-center`}
          >
            Unlocking the Art of Web Development
          </h1>
        </div>
      </div>
      <div className="items-center p-4 hidden lg:block relative min-h-[200px] border border-white/[50%] bg-black/[70%]">
        <CardCorners />
      </div>
      <div className="items-center p-4 hidden lg:block relative min-h-[200px] border border-white/[50%] bg-black/[70%]">
        <CardCorners />
      </div>
    </div>
  );
}

export default BentoGrid;
