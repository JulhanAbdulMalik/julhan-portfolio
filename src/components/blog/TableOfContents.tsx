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
}

export function TableOfContents({ items }: TableOfContentsProps) {
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

  return (
    <div className="p-5 rounded-2xl bg-[#020c24] border border-white/[0.08] sticky top-28 space-y-4">
      <div className="flex items-center gap-2 pb-3 border-b border-white/[0.08] text-white font-semibold text-xs tracking-wider uppercase font-mono">
        <ListCollapse className="w-4 h-4 text-[#07DFFF]" />
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
                  ? "text-white bg-[#007FA1]/30 font-semibold border-l-2 border-[#007FA1]"
                  : "text-[#71717a] hover:text-white hover:bg-white/[0.03]"
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
