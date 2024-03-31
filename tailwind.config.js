/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sokcho: ["Sokcho"],
        SokchoLight: ["SokchoLight"],
      },
      colors: {
        spring: "#FF608C",
        summer: "#26A68F",
        autumn: "#DD7116",
        winter: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

// font-family: "Sokcho";
//   src: url('./fonts/SokchoBadaDotum.ttf');
