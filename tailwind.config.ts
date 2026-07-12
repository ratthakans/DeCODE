import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark base — Premium Off-Black (Charcoal)
        ink: {
          DEFAULT: "#0A0A0B",
          50: "#0D0D0E",
          100: "#121315",
          200: "#1A1B1E",
          300: "#222428",
        },
        // Aurora green spectrum
        aurora: {
          50: "#CBEFEB",
          100: "#B5F2DB",
          200: "#8fe9db",
          300: "#48A89A",
          400: "#22bda9",
          500: "#00524D",
          600: "#053931",
          700: "#042F34",
          800: "#072928",
          900: "#021e21",
          violet: "#7c3aed",
          magenta: "#c026d3",
        },
        // Mint green — the signature aurora highlight
        mint: {
          DEFAULT: "#B5F2DB",
          soft: "#CBEFEB",
          bright: "#8fe9db",
          dim: "#48A89A",
        },
        // Platinum / Pure White accent — for HUD elements and buttons
        accent: {
          DEFAULT: "#ffffff",
          soft: "#a3a3a3",
          deep: "#525252",
        },
        // Neutral tones
        pale: "#E4EEF0",
        coral: "#ff5a4d",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Fluid type scale
        "fluid-sm": "clamp(0.85rem, 0.8rem + 0.25vw, 0.95rem)",
        "fluid-base": "clamp(1rem, 0.95rem + 0.3vw, 1.15rem)",
        "fluid-lg": "clamp(1.2rem, 1.05rem + 0.7vw, 1.6rem)",
        "fluid-xl": "clamp(1.6rem, 1.2rem + 1.8vw, 2.6rem)",
        "fluid-2xl": "clamp(2.2rem, 1.5rem + 3.4vw, 4rem)",
        "fluid-3xl": "clamp(2.8rem, 1.6rem + 5.6vw, 6.5rem)",
      },
      maxWidth: {
        container: "1240px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "gradient-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(4%, -6%) scale(1.15)" },
          "66%": { transform: "translate(-5%, 4%) scale(0.95)" },
        },
        "gradient-drift-slow": {
          "0%, 100%": { transform: "translate(0, 0) scale(1.05)" },
          "50%": { transform: "translate(-6%, 5%) scale(1.2)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { opacity: "0" },
        },
        // Aurora-specific animations
        "aurora-shimmer": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "aurora-wave": {
          "0%": { transform: "translateX(-5%) skewY(-1deg) scaleY(1)" },
          "25%": { transform: "translateX(2%) skewY(0.5deg) scaleY(1.1)" },
          "50%": { transform: "translateX(5%) skewY(1deg) scaleY(0.95)" },
          "75%": { transform: "translateX(-2%) skewY(-0.5deg) scaleY(1.05)" },
          "100%": { transform: "translateX(-5%) skewY(-1deg) scaleY(1)" },
        },
        "aurora-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "glass-refract": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
        "gradient-drift": "gradient-drift 18s ease-in-out infinite",
        "gradient-drift-slow": "gradient-drift-slow 26s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.2, 0.8, 0.4, 1) infinite",
        "aurora-shimmer": "aurora-shimmer 8s ease-in-out infinite",
        "aurora-wave": "aurora-wave 20s ease-in-out infinite",
        "aurora-pulse": "aurora-pulse 4s ease-in-out infinite",
        "glass-refract": "glass-refract 12s linear infinite",
        "star-twinkle": "star-twinkle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
