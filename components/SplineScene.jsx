import { sacramento } from "@/fonts";
import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import NoodleArrow from "@/public/noodle_arrow.svg";

export default function SplineScene() {
  return (
    <div className="absolute top-[100vh] -translate-y-[35%] h-[100vh] w-full">
      <div
        className={`${sacramento.className} flex gap-4 absolute left-8 md:left-12 lg:left-28 top-8 rotate-6`}
      >
        <h1 className={`text-4xl md:text-5xl`}>
          the ultimate <b className="text-[#61cc9c]">dev</b> <br /> keyboard
          workflow
        </h1>

        <Image
          src={NoodleArrow}
          alt="noodle-arrow"
          className="w-[100px] translate-y-[10px] translate-x-[-20px]"
        />
      </div>

      <div className="absolute size-[250px] md:size-[450px] top-[50%] left-[8%] lg:left-[50%] lg:translate-x-[-50%] -translate-y-[50%] bg-[#61cc9c]/[0.8] -z-10 rounded-full blur-[200px]"></div>

      <Spline scene="https://prod.spline.design/YTurGkXAz-yWLxOO/scene.splinecode" />
    </div>
  );
}
