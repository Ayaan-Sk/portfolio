"use client";
import { useEffect, useState } from "react";
import { stretch, montserrat_alternates } from "@/lib/fonts";

/**
 * Simple preloader overlay shown on initial page load.
 * Hides after window 'load' or fallback timeout.
 */
export default function PreloaderOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => setVisible(false);

    // Hide when all assets are loaded
    if (document.readyState === "complete") {
      // If already loaded, short delay for smoothness
      const t = setTimeout(hide, 300);
      return () => clearTimeout(t);
    }

    window.addEventListener("load", hide);

    // Fallback: hide after 2 seconds in case 'load' is slow
    const fallback = setTimeout(hide, 2000);

    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(fallback);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-4 select-none">
      <svg className="w-48 h-28 animate-strokeFill" viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg">
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".35em"
          className={`${stretch.className} text-4xl md:text-5xl`}
          fill="transparent"
          stroke="#61cc9c"
          strokeWidth="1"
        >
          A.S
        </text>
      </svg>
      <p className={`${montserrat_alternates.className} text-sm text-white/80`}>Loading…</p>
    </div>
  );
}