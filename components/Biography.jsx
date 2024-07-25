import { plaster } from "@/fonts";
import BentoGrid from "@/components/ui/BentoGrid";

function Biography() {
  return (
    <div className="relative mt-[150px] lg:mt-0 min-h-[100vh] w-screen py-[50px] lg:py-[100px] flex flex-col items-center px-2 md:px-12 lg:px-16 xl:px-24">
      <div
        className={`${plaster.className} flex items-center justify-center w-full gap-2 text-4xl md:text-[80px] lg:text-[100px] xl:text-9xl`}
      >
        <h1
          className="text-transparent"
          style={{
            WebkitTextStroke: "0.8px white",
          }}
        >
          CHRYS
        </h1>
        <div className="size-[60px] md:size-[100px] lg:size-[150px] rounded-full border-[3px] border-[#61cc9c] p-[5px]">
          <div
            className="h-full w-full rounded-full border border-white/[40%]"
            style={{
              backgroundImage: "url('/profile.jpg')",
              backgroundSize: "120%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <h1
          className="text-transparent"
          style={{
            WebkitTextStroke: "0.8px white",
          }}
        >
          PRASE
        </h1>
      </div>

      <div className="flex w-full mt-8 md:mt-16">
        <BentoGrid />
      </div>
    </div>
  );
}

export default Biography;
