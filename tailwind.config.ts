import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F1",
        cafe: "#4E342E",
        terracotta: "#C97A45",
        leaf: "#6C9E6F",
        wheat: "#E7C27D",
        charcoal: "#3B3B3B"
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,0.06)"
      },
      borderRadius: { xl: "16px" }
    }
  },
  plugins: []
};
export default config;
