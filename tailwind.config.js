const { hairlineWidth } = require("nativewind/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,jsx,js}", "./components/**/*.{ts,tsx,js,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        border: "rgba(40,40,40,82)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        text: {
          DEFAULT: "#F4F4F4",
          primary: "#F4F4F4",
          foreground: "#9F9F9F",
        },
        primary: {
          DEFAULT: "#8E6EEA",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#B36EEA",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#3DBEFF",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "#B02E2E",
          foreground: "#8A2F2F",
        },
        success: {
          DEFAULT: "#1EA427",
          foreground: "#1F8126",
        },
        warning: {
          DEFAULT: "#F2BC08",
          foreground: "#DEB11C",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "rgba(40,40,40,0.5)",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // I used Inter as a default font
        inter: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "shadow-gradient":
          "linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))",
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      borderWidth: {
        hairline: hairlineWidth(),
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
    },
  },
  plugins: [require("tailwindcss-animate")],
};
