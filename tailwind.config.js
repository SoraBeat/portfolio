/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: "#CCCCCC",
      gold: "#DCAC58",
      darkGold: "#AC8747",
      backgroundLight: "#252836",
      backgroundDark: "#1F1D2B",
      backgroundDarkest: "#191B24",
      backgroundModal:"rgba(0, 0, 0, 0.80)"
    },
    screens: {
      xs:"500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
