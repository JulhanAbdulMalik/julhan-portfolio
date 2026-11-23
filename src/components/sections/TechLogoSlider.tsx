"use client";

import React, { useState } from "react";

interface TechLogo {
  name: string;
  short: string;
  src: string;
  cdnSrc: string;
}

// Logo resmi transparan tanpa background (Dual Source: Local + High-speed CDN)
const techLogos: TechLogo[] = [
  {
    name: "Next.js",
    short: "Next.js",
    src: "/images/tech/nextjs.svg",
    cdnSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    short: "TypeScript",
    src: "/images/tech/typescript.svg",
    cdnSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Flutter",
    short: "Flutter",
    src: "/images/tech/flutter.svg",
    cdnSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    name: "PostgreSQL",
    short: "PostgreSQL",
    src: "/images/tech/postgresql.svg",
    cdnSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "React",
    short: "React",
    src: "/images/tech/react.svg",
    cdnSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Prisma ORM",
    short: "Prisma",
    src: "/images/tech/prisma.svg",
    cdnSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    name: "Tailwind CSS",
    short: "Tailwind",
    src: "/images/tech/tailwindcss.svg",
    cdnSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Git",
    short: "Git",
    src: "/images/tech/git.svg",
    cdnSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Node.js",
    short: "Node.js",
    src: "/images/tech/nodejs.svg",
    cdnSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
];

function LogoItem({ logo }: { logo: TechLogo }) {
  const [currentSrc, setCurrentSrc] = useState(logo.src);
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    // Jika path lokal bermasalah, otomatis coba CDN fallback
    if (currentSrc === logo.src && logo.cdnSrc) {
      setCurrentSrc(logo.cdnSrc);
    } else {
      // Jika kedua sumber tidak bisa diakses, tampilkan badge teks rapi (bukan icon error browser)
      setHasError(true);
    }
  };

  return (
    <div
      className="flex-shrink-0 flex items-center justify-center min-w-[30px] h-7 sm:h-8 px-0.5 select-none"
      title={logo.name}
    >
      {hasError ? (
        // Antisipasi elegan: chip minimalis bergaya modern, sama sekali tidak tampak error
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md text-[10px] font-medium tracking-tight bg-[#000519]/5 border border-black/[0.08] text-[#18181b]">
          {logo.short}
        </span>
      ) : (
        <div className="relative w-5 h-5 sm:w-[22px] sm:h-[22px] flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentSrc}
            alt=""
            onLoad={() => setLoaded(true)}
            onError={(e) => {
              // Sembunyikan seketika agar tidak memunculkan icon gambar rusak bawaan browser
              e.currentTarget.style.display = "none";
              handleError();
            }}
            className={`w-full h-full object-contain transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            draggable={false}
          />
        </div>
      )}
    </div>
  );
}

export function TechLogoSlider() {
  // Duplikasi logo untuk transisi infinite scroll mulus
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

      <div className="flex animate-tech-scroll gap-6 sm:gap-7 items-center w-max">
        {logos.map((logo, idx) => (
          <LogoItem key={`${logo.name}-${idx}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}
