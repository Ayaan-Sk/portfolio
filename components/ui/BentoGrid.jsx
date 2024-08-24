import { montserrat_alternates } from "@/lib/fonts";
import CardCorners from "./CardCorners";
import { InteractiveGradientBg } from "@/components/ui/InteractiveGradientBg";
import { FancyButtonAlt } from "./FancyButton";
import { FaRegCopy } from "react-icons/fa6";
import { socials } from "@/lib/utils";
import Game from "../Game";
import { PiFilePdfFill } from "react-icons/pi";
import { RiChatSmile3Line } from "react-icons/ri";
import Link from "next/link";

function BentoGrid() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-6 md:grid-rows-2 xl:grid-rows-3 w-full flex-1 gap-4">
      <div className="relative flex flex-col items-center p-4 min-h-[200px] border border-white/[50%] bg-black/[20%] backdrop-blur-md col-span-2">
        <CardCorners />
        <h1 className={`${montserrat_alternates.className} font-semibold`}>
          Address
        </h1>
        <div className="flex flex-col items-center m-auto gap-2">
          <h1 className="text-2xl font-bold">Ghana ~ Accra</h1>
          <span className="text-gray-400">Satellite</span>
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/illustration-alt.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div
        className={`flex flex-col items-center p-4 relative min-h-[200px] border border-white/[50%] bg-black/[20%] backdrop-blur-md col-span-2`}
      >
        <CardCorners />
        <h1 className={`${montserrat_alternates.className} font-semibold`}>
          Education
        </h1>
        <div className="flex flex-col items-center m-auto gap-2">
          <h1 className={`text-2xl font-bold text-center`}>
            BSc. Computer Science
          </h1>
          <span className="text-center text-gray-400">
            Ghana Communication Technology University
          </span>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url('/address-illustration.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start p-4 relative min-h-[200px] border bg-black/[20%] border-white/[50%] col-span-2 gap-8">
        <CardCorners />
        <InteractiveGradientBg />

        <h1
          className={`relative ${montserrat_alternates.className} whitespace-nowrap font-semibold`}
        >
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

      <div className="relative flex flex-col items-center justify-center p-4 min-h-[200px] border bg-black/[20%] border-white/[50%] xl:row-span-2 col-span-3">
        <CardCorners />
        <InteractiveGradientBg />

        <div className="mt-auto h-[40px] md:h-[60px] w-full mb-8 flex justify-center">
          {socials.map(({ name, Icon, link }, index) => {
            return (
              <Link
                key={name}
                href={link}
                target="_blank"
                className={`h-[40px] md:h-[60px] aspect-square rounded-xl bg-black border border-white/30 flex items-center justify-center text-4xl cursor-pointer`}
                style={{
                  "--size": socials.length,
                  "--index": index,
                  transform: `rotate(calc(360 / var(--size) * var(--index) * 1deg))`,
                }}
              >
                <Icon
                  className="text-[24px] sm:text-[32px]"
                  style={{
                    "--size": socials.length,
                    "--index": index,
                    transform: `rotate(calc(360 / var(--size) * var(--index) * -1deg))`,
                  }}
                />
              </Link>
            );
          })}
        </div>

        <h1
          className={`relative ${montserrat_alternates.className} text-2xl md:text-3xl lg:text-4xl font-semibold text-center`}
        >
          @ Creative Ambition
        </h1>

        <p className="relative max-w-[90%] md:max-w-[80%] lg:max-w-[70%] text-center mt-4 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          tempore?
        </p>

        <div className="relative flex gap-4 mt-8 mb-auto">
          <div className="flex xl:hidden">
            <FancyButtonAlt icon={<PiFilePdfFill />} title="Download Resume" />
          </div>

          <div className="hidden xl:flex">
            <FancyButtonAlt icon={<FaRegCopy />} title="Copy Email" />
          </div>
        </div>

        <span className="hidden md:flex relative text-sm md:text-base">
          @infinity Studios
        </span>
      </div>

      <div className="flex flex-col items-center p-4 relative min-h-[200px] border border-white/[50%] xl:row-span-2 col-span-3 xl:col-span-2 bg-black/[20%] backdrop-blur-md">
        <CardCorners />

        <span className="mb-4">
          Let&apos;s play a game of{" "}
          <b className={`text-[#61cc9c]`}>Classic Chess😎</b>
        </span>

        <div className="relative my-auto w-full flex flex-col items-center">
          <Game />
        </div>
      </div>

      <div className="flex md:hidden p-4 xl:flex flex-col justify-center relative min-h-[200px] border border-white/[50%] bg-black/[20%] backdrop-blur-md">
        <CardCorners />

        <span className="text-center mx-auto self-center">
          Freelance Software Developer{" "}
          <em className="text-[#61cc9c]">@fiverr</em>
        </span>

        <div
          className="h-[70px] my-auto"
          style={{
            backgroundImage: "url('/contact/fiverr.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <Link
          href={"https://www.fiverr.com/users/chrysyt"}
          target="_blank"
          className="flex flex-col w-full mt-4"
        >
          <FancyButtonAlt
            icon={<RiChatSmile3Line />}
            title="Get in touch"
            link="https://www.fiverr.com/users/chrysyt"
          />
        </Link>
      </div>

      <div className="hidden justify-center p-4 xl:flex flex-col relative min-h-[200px] border border-white/[50%] bg-black/[20%] backdrop-blur-md">
        <CardCorners />
        <h1 className="mx-auto">Download Resume</h1>
        <div
          className="flex-1 w-[65%] mt-1 mb-0 mx-auto"
          style={{
            backgroundImage: "url('/res_illustration.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>

        <Link download href="" className="flex flex-col mt-auto">
          <FancyButtonAlt icon={<PiFilePdfFill />} title="Download" />
        </Link>
      </div>
    </div>
  );
}

export default BentoGrid;
