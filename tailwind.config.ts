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
          dark: "#000519",       // deep midnight navy hero / dark sections
          dark2: "#020c24",      // cards on dark
          dark3: "#041232",      // footer, elevated dark surface
        },
        // ── Light Section Surfaces ─────────────────────────
        surface: {
          light: "#f8f8f8",      // off-white light sections
          white: "#ffffff",      // pure white cards / form
          muted: "#f1f1f1",      // slightly deeper off-white
        },
        // ── Official Brand Palette (Design Specification) ──
        brand: {
          50: "#E9FEFF",
          100: "#C9FAFF",
          200: "#99F5FF",
          300: "#54EBFF",
          400: "#07DFFF", // Primary electric cyan/blue highlight
          500: "#00CDEF",
          600: "#00A2C9",
          700: "#007FA1", // Primary brand accent on light backgrounds
          800: "#086582",
          900: "#0C536D",
          950: "#003347", // Deepest brand dark
          DEFAULT: "#07DFFF",
        },
        // ── Brand Accent ───────────────────────────────────
        accent: {
          DEFAULT: "#007FA1",    // primary brand deep cyan (Brand 700)
          dark: "#003347",       // darker tone (Brand 950)
          light: "#07DFFF",      // bright cyan (Brand 400)
          subtle: "rgba(7,223,255,0.15)", // faint cyan tint
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
          primary: "#000519",
          secondary: "#334155",
          muted: "#64748b",
          faint: "#cbd5e1",
        },
        // ── Dividers ───────────────────────────────────────
        line: {
          dark: "rgba(255,255,255,0.08)",   // divider on dark bg
          light: "rgba(0,5,25,0.08)",        // divider on light bg
          accent: "rgba(7,223,255,0.35)",     // accent divider (#07DFFF)
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
