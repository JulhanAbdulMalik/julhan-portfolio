"use client";

import React from "react";
import Image from "next/image";

const techLogos = [
  { name: "Next.js", src: "/images/nextjs.svg" },
  { name: "TypeScript", src: "/images/typescript.svg" },
  { name: "Flutter", src: "/images/flutter.svg" },
  { name: "PostgreSQL", src: "/images/postgresql.svg" },
  { name: "React", src: "/images/react.svg" },
  { name: "Prisma ORM", src: "/images/prisma.svg" },
  { name: "Tailwind CSS", src: "/images/tailwindcss.svg" },
  { name: "Git", src: "/images/git.svg" },
];

export function TechLogoSlider() {
  // Duplicate for seamless infinite loop
  const logos = [...techLogos, ...techLogos];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left fade mask */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#fafafa] to-transparent"
        aria-hidden="true"
      />
      {/* Right fade mask */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#fafafa] to-transparent"
        aria-hidden="true"
      />

      <div className="flex animate-tech-scroll gap-5 w-max">
        {logos.map((logo, idx) => (
          <div
            key={`${logo.name}-${idx}`}
            className="flex flex-col items-center justify-center gap-1.5 flex-shrink-0"
            title={logo.name}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 relative rounded-lg overflow-hidden shadow-sm border border-black/[0.06] bg-white flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain p-1"
                sizes="40px"
              />
            </div>
            <span className="text-[9px] sm:text-[10px] text-[#71717a] font-medium whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
