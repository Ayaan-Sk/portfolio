import { montserrat_alternates } from "@/fonts";
import { navItems } from "@/lib/utils";
import Link from "next/link";

function Navbar() {
  return (
    <div className="fixed z-50 top-4 w-[90vw] md:w-max bg-[#000]/50 backdrop-blur-md border border-white/[0.1] p-4 md:px-8 rounded-lg flex justify-center">
      <div className="flex flex-1 justify-around text-sm md:gap-10">
        {navItems.map((nav: { name: string; link: string }) => {
          return (
            <Link key={nav.name} href={nav.link}>
              <span
                className={`${montserrat_alternates.className} opacity-80 cursor-pointer hover:text-[#61cc9c] hover:opacity-100`}
              >
                {nav.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
