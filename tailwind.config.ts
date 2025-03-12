import { theme } from "tailwindcss";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [animate],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};
