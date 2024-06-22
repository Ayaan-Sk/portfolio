"use client";
import { useEffect, useState } from "react";

function HeroSnapBorders() {
  const [showSnapBorders, setShowSnapBorders] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowSnapBorders(false);
      } else {
        setShowSnapBorders(true);
      }
    });
  });

  return (
    <div
      className={`${
        showSnapBorders ? "opacity-100" : "opacity-0"
      } absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500`}
    >
      <div className="rounded-sm size-5 border-2 border-r-transparent border-b-transparent absolute left-8 top-8"></div>

      <div className="rounded-sm size-5 border-2 border-t-transparent border-r-transparent absolute left-8 bottom-8"></div>

      <div className="rounded-sm size-5 border-2 border-l-transparent border-b-transparent absolute right-8 top-8"></div>

      <div className="rounded-sm size-5 border-2 border-l-transparent border-t-transparent absolute right-8 bottom-8"></div>
    </div>
  );
}

export default HeroSnapBorders;
