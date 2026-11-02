import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Dark Section Surfaces ──────────────────────────
        canvas: {
          dark: "#0a0a0a",       // near-black hero / dark sections
          dark2: "#111111",      // slightly lighter dark (cards on dark)
          dark3: "#1a1a1a",      // footer, elevated dark surface
        },
        // ── Light Section Surfaces ─────────────────────────
        surface: {
          light: "#f8f8f8",      // off-white light sections
          white: "#ffffff",      // pure white cards / form
          muted: "#f1f1f1",      // slightly deeper off-white
        },
        // ── Brand Accent ───────────────────────────────────
        accent: {
          DEFAULT: "#0ea5e9",    // sky-500 — primary brand blue
          dark: "#0284c7",       // sky-600 — darker blue
          light: "#38bdf8",      // sky-400 — lighter highlight
          subtle: "rgba(14,165,233,0.12)", // faint tint
        },
        // ── Text — Dark Sections ───────────────────────────
        ink: {
          primary: "#ffffff",
          secondary: "#a1a1aa",  // zinc-400
          muted: "#71717a",      // zinc-500
          faint: "#3f3f46",      // zinc-700
        },
        // ── Text — Light Sections ──────────────────────────
        dark: {
          primary: "#0a0a0a",
          secondary: "#404040",
          muted: "#737373",
          faint: "#d4d4d4",
        },
        // ── Dividers ───────────────────────────────────────
        line: {
          dark: "rgba(255,255,255,0.07)",   // divider on dark bg
          light: "rgba(0,0,0,0.07)",        // divider on light bg
          accent: "rgba(14,165,233,0.25)",  // accent divider
        },
      },
      fontFamily: {
        sans: [
          "var(--font-plus-jakarta)",
          "Plus Jakarta Sans",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      fontSize: {
        // Display sizes for editorial headings
        "display-2xl": ["clamp(3rem,6vw,5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-xl":  ["clamp(2.5rem,5vw,4rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-lg":  ["clamp(2rem,4vw,3rem)",   { lineHeight: "1.1",  letterSpacing: "-0.018em" }],
        "display-md":  ["clamp(1.5rem,3vw,2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      spacing: {
        "section": "6rem",    // 96px — standard section vertical padding
        "section-sm": "4rem", // 64px — smaller section padding
        "container-pad": "max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem))",
      },
      maxWidth: {
        "8xl": "88rem",  // 1408px — max container
      },
      animation: {
        "fade-up":   "fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":   "fadeIn 0.45s ease forwards",
        "slide-in":  "slideIn 0.55s cubic-bezier(0.16,1,0.3,1) forwards",
        "count-up":  "countUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%":   { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        countUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
