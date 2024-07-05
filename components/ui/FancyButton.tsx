"use client";

export function FancyButton() {
  return (
    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-xs font-semibold leading-6  text-white inline-block mt-12 md:mt-16">
      <span className="absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-lg bg-zinc-950 py-4 px-6 md:px-10 ring-1 ring-white/10 ">
        <span className="text-base font-medium">🚀 Projects</span>
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
}

export function FancyButtonAlt({
  title,
  icon,
}: {
  title: string;
  icon: JSX.Element;
}) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#61cc9c_0%,#393BB2_50%,#61cc9c_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-8 py-4 text-sm font-medium text-white backdrop-blur-3xl">
        {title}
      </span>
    </button>
  );
}
