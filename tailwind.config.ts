import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F1",
        cafe: "#4E342E",
        leaf: "#6C9E6F",
        terracotta: "#C97A45",
        wheat: "#E7C27D"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      }
    }
  },
  plugins: [],
};

export default config;
