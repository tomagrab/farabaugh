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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#55dbb7",
          secondary: "#c91ae0",
          accent: "#5effa1",
          neutral: "#2a1e33",
          "base-100": "#262556",
          info: "#587cca",
          success: "#19d27b",
          warning: "#f5c356",
          error: "#e15175",
        },
      },
    ],
  },
};
export default config;
