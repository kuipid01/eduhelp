import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "Blue/blue-50": "#eeeffd",
        "Blue/blue-100": "#caccf8",
        "Blue/blue-200": "#b0b3f4",
        "Blue/blue-300": "#8c90f0",
        "Blue/blue-400": "#767bed",
        "Blue/blue-500": "#545ae8",
        "Blue/blue-600": "#4c52d3",
        "Blue/blue-700": "#3c40a5",
        "Blue/blue-800": "#2e3280",
        "Blue/blue-900": "#232661",
        "sec-Yellow/sec-yellow-50": "#fff6eb",
        "sec-Yellow/sec-yellow-100": "#fee2c0",
        "sec-Yellow/sec-yellow-200": "#fdd5a1",
        "sec-Yellow/sec-yellow-300": "#fcc176",
        "sec-Yellow/sec-yellow-400": "#fcb55c",
        "sec-Yellow/sec-yellow-500": "#fba333",
        "sec-Yellow/sec-yellow-600": "#e4942e",
        "sec-Yellow/sec-yellow-700": "#b27424",
        "sec-Yellow/sec-yellow-800": "#8a5a1c",
        "sec-Yellow/sec-yellow-900": "#694415",
        "neutral/neutral-1": "#e9e9e9",
        "neutral/neutral-2": "#c9c9c9",
        "neutral/neutral-3": "#9e9e9e",
        "neutral/neutral-4": "#717171",
        "neutral/neutral-5": "#474747",
        "neutral/neutral-6": "#1e1e1e",
        "neutral/neutral-7": "#1a1a1a",
        "neutral/neutral-8": "#151515",
        "neutral/neutral-9": "#111111",
        "neutral/neutral-10": "#0d0d0d",
        "brand/prim-blue": "#545ae8",
        "brand/ORANGE": "#fba333",
        "brand/NEUTRAL": "#1e1e1e",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        none: "0",
        xs: "0.3125rem",
        "sm-brand": "0.4375rem",
        default: "0.75rem",
        "lg-brand": "1.875rem",
      },
      fontFamily: {
        "dm-sans": "DM Sans",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        base: "1rem",
        lg: "1.125rem",
        xl: "1.5625rem",
        "2xl": "1.625rem",
        "3xl": "2.1875rem",
        "4xl": "2.8125rem",
        "5xl": "3.4375rem",
        "6xl": "4.0625rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
