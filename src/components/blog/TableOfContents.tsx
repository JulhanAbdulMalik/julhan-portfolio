"use client";

import React, { useState, useEffect } from "react";
import { ListCollapse } from "lucide-react";

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  theme?: "light" | "dark";
}

export function TableOfContents({ items, theme = "light" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0% 0% -70% 0%",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 100; // Account for sticky navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`p-5 rounded-xl border sticky top-28 space-y-4 ${
        isDark
          ? "bg-[#020c24] border-white/[0.08]"
          : "bg-white border-neutral-200/90 shadow-xs"
      }`}
    >
      <div
        className={`flex items-center gap-2 pb-3 border-b font-semibold text-xs tracking-wider uppercase ${
          isDark
            ? "border-white/[0.08] text-white"
            : "border-neutral-200 text-[#000519]"
        }`}
      >
        <ListCollapse
          className={`w-4 h-4 ${isDark ? "text-[#07DFFF]" : "text-[#007FA1]"}`}
        />
        <span>Daftar Isi Artikel</span>
      </div>

      <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              type="button"
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`w-full text-left transition-colors duration-200 block text-xs leading-relaxed py-1.5 rounded-md px-2.5 cursor-pointer ${
                item.level === 3 ? "pl-5" : ""
              } ${
                isActive
                  ? isDark
                    ? "text-white bg-[#007FA1]/30 font-semibold border-l-2 border-[#007FA1]"
                    : "text-[#007FA1] bg-[#007FA1]/10 font-semibold border-l-2 border-[#007FA1]"
                  : isDark
                  ? "text-[#71717a] hover:text-white hover:bg-white/[0.03]"
                  : "text-[#52525b] hover:text-[#000519] hover:bg-neutral-100"
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
