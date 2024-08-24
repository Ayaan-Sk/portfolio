"use client";

import { useState } from "react";

const UnderConstruction = () => {
  const [hide, setHide] = useState(false);
  const hideClass = hide ? "hidden" : null;
  return (
    <div
      className={`fixed ${hideClass} z-50 bottom-0 left-0 w-screen h-[50px] flex justify-center items-center p-1 px-8 bg-[#61cc9c] text-black font-semibold text-center text-base border border-black`}
    >
      <span>this site is currently under construction 🚧🏗️</span>
      <div
        className="ml-auto cursor-pointer"
        onClick={() => {
          setHide(true);
        }}
      >
        x
      </div>
    </div>
  );
};

export default UnderConstruction;
