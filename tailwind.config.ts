import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#f0f8ff",
        text: "#ccd6f6",
        subtext: "#94a3b8",
        primary: "#f3f3e1",
        specialText: "#f3f3e1",
        background: "#140821",
        // "background-light": "#675f72",
        tooltipColor: "#572390",
        // "background-light": "#250f3e",
      },
      spacing: {
        std: "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
