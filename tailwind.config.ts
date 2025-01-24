import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },
      fontFamily: {
        ovo: ["Ovo", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      animation: {
        dance: "dance 1s infinite",
      },
      keyframes: {
        dance: {
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-5px) rotate(-5deg)" },
          "50%": { transform: "translateY(5px) rotate(5deg)" },
          "75%": { transform: "translateY(-5px) rotate(-3deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
