"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function SkillRow({
  skills,
  reverse,
}: {
  skills: { name: string; img: string }[];
  reverse: boolean;
}) {
  const [mdBreakPoint, setMdBreakPoint] = useState(false);

  const skillsRef = useRef(null);
  const skillCardsRef = useRef([]);

  useEffect(() => {
    skillsRef.current = document.querySelector("#skills");
    skillCardsRef.current = Array.from(
      document.querySelectorAll("#skill-element")
    );

    const options = {
      root: null,
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const playState = entry.isIntersecting ? "running" : "paused";

        skillCardsRef.current.forEach((card) => {
          card.style.animationPlayState = playState;
        });
      });
    }, options);

    observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  useEffect(() => {
    function checkBreakpoint() {
      if (window.innerWidth > 768) {
        setMdBreakPoint(true);
      } else {
        setMdBreakPoint(false);
      }
    }

    checkBreakpoint();
  });

  let width = mdBreakPoint
    ? `${skills.length * 250}px`
    : `${skills.length * 150}px`;

  return (
    <div
      className={`relative h-[100px] flex items-center overflow-hidden`}
      style={{
        width: `${width}`,
        maskImage: "radial-gradient(circle, black, transparent)",
      }}
    >
      {skills.map((skill: { name: string; img: string }, index: number) => (
        <div
          key={index}
          id="skill-element"
          className={`absolute ${
            reverse
              ? "right-[100%] animate-animateSkillsReverse"
              : "left-[100%] animate-animateSkills"
          } h-[80px] md:h-[100px] w-[150px] md:w-[250px] bg-black rounded-lg border border-white/[50%] flex items-center justify-center transition-all`}
          style={{
            boxShadow: "0 10px 24px -20px #61cc9c",
            animationDelay: `${(index * 30) / skills.length}s`,
          }}
        >
          <Image
            src={skill.img}
            alt="skill-logo"
            height={100}
            width={100}
            className="absolute left-2 h-[80%] w-auto object-contain opacity-60"
          />
          <h1 className="z-10">{skill.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default SkillRow;
