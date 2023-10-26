import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      maxWidth: {
        containerSmall: "33.75rem",
        containerMedium: "45rem",
        container: "60rem",
        containerLarge: "73.75rem"
      },
      colors: {
        bsDark: "rgba(var(--bs-dark-rgb))",
        ratings: "var(--ratings-fill)",
        bsGray: "var(--bs-gray)"
      }
    }
  },
  plugins: []
};
export default config;
