import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mossy Hollow — organic, earthy, premium
        bg: "#F4F6E8",           // pale lime-ivory page base
        surface: "#FFFFFF",      // pure white cards
        "surface-2": "#EBF0D4",  // light sage alternate sections
        "border-color": "#C8D2A0", // sage-olive soft border
        // Olive — grounded authority
        primary: "#636B2F",      // medium olive — CTAs, buttons
        primaryLight: "#7A8338", // hover state
        // Lime accent — the bright pop
        gold: "#D4DE95",         // light lime accent.  
        goldLight: "#E8F0B0",
        // Typography
        foreground: "#3D4127",   // dark forest green — rich body text
        muted: "#7D8455",        // mid olive — secondary text
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        // Slower variant for video testimonials
        "marquee-slow": "marquee 42s linear infinite",
        "marquee-slow-reverse": "marquee-reverse 42s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
