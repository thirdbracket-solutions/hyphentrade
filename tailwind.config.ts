import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edf3fa",
          100: "#c8dbf0",
          200: "#a4c3e6",
          300: "#7fabdd",
          400: "#5b93d3",
          500: "#367bc9",
          600: "#2c65a4",
          700: "#224e80",
          800: "#19385b",
          900: "#0f2237",
          950: "#050b12",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
