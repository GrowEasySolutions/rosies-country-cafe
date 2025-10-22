import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F1",
        cafe: "#4E342E",
        leaf: "#6C9E6F",
        terracotta: "#C97A45",
        wheat: "#E7C27D",
        charcoal: "#3B3B3B"
      },
      boxShadow: { soft: "0 6px 24px rgba(0,0,0,.06)" },
      borderRadius: { xl: "16px" },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        serif: ["Playfair Display", "ui-serif", "Georgia"]
      }
    }
  },
  plugins: []
};

export default config;
