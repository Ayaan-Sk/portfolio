import { poiret_one, sacramento } from "@/fonts";
import PlaceholderTextAnimation from "./ui/PlaceholderTextAnimation";
import { socials } from "@/lib/utils";
import { BsArrowRight } from "react-icons/bs";

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

      <div className="flex flex-col items-center justify-center gap-12 md:px-20 lg:px-[200px] mt-[30px] md:tracking-wide">
        <div className="flex flex-col gap-2 md:gap-3 items-center text-center text-3xl md:text-5xl lg:text-5xl font-medium">
          Ready to make your
          <div className="flex items-center">
            <PlaceholderTextAnimation
              texts={["brand", "service", "business", "product"]}
            />
            <span className="flex whitespace-nowrap">
              &nbsp;appearance&nbsp;
              <span className="hidden md:flex">in the</span>
            </span>
          </div>
          <div>
            <span className="md:hidden">in the&nbsp;</span>
            <span className="relative mt-3 before:absolute before:h-[20px] before:w-full before:border-t before:top-[120%] before:rotate-[-8deg] before:rounded-[100%]">
              digital world?
            </span>
          </div>
        </div>

        {/* <div className="flex mt-12">
          <FancyButtonAlt icon={<RiMailSendFill />} title="Get in touch" />
        </div> */}
      </div>

      <div className="w-screen my-auto px-3 flex items-center justify-center">
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center content-center">
          {socials.map((social) => (
            <div key={social.name} className="flex border gap-3">
              <span className="">{social.name}</span>
              <BsArrowRight />
            </div>
          ))}
        </div>
      </div>

      <footer
        className={`${poiret_one.className} mt-auto w-full flex justify-center gap-2 opacity-[70%]`}
      >
        &copy;<span>infinity studios, 2024</span>
      </footer>
    </div>
  );
}

export default Contact;
