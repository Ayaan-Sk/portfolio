import { poiret_one } from "@/fonts";
import { FancyButtonAlt } from "./ui/FancyButton";

function Contact() {
  return (
    <div
      id="contact"
      className="relative min-h-[100vh] flex flex-col items-center px-4 py-10 pb-4"
    >
      <span
        className={`${poiret_one.className} mt-[80px] text-2xl text-gray-300`}
      >
        infinity studios
      </span>

      <div className="flex flex-col items-center gap-12 md:px-20 lg:px-[200px] mt-[30px]">
        <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          facilis sapiente quas?
        </h1>
        <div className="flex">
          <FancyButtonAlt title="Send me an email" />
        </div>
      </div>

      <footer className="mt-auto w-full flex justify-center gap-2 opacity-[70%]">
        &copy;<span>infinity studios, 2024</span>
      </footer>
    </div>
  );
}

export default Contact;
