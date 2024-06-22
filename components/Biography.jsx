import { plaster } from "@/fonts";
import BentoGrid from "@/components/ui/BentoGrid";

function Biography() {
  return (
    <div className="relative min-h-[100vh] py-[50px] lg:py-[100px] flex flex-col items-center px-2 md:px-20">
      <div
        className={`${plaster.className} flex items-center gap-3 text-4xl md:text-7xl lg:text-9xl`}
      >
        <h1
          className="text-transparent"
          style={{
            WebkitTextStroke: "0.8px white",
          }}
        >
          CHRYS
        </h1>
        <div className="size-[70px] md:size-[100px] lg:size-[150px] rounded-full border-2 border-[#61cc9c] p-[4px]">
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

      <div className="flex w-screen mt-16 px-4 lg:px-24 flex-1">
        <BentoGrid />
      </div>
    </div>
  );
}

export default Biography;
