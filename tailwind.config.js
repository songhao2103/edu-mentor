/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        strokeM: "#79859F",
        XanhMobifone: "#004390",
        White: "#fff",
        Background2: "#C3E2FF",
        Text: "#333",
        Text1: "#303030",
        Text2: "#4C5665",
        LabelSecondary: "rgba(60, 60, 67, 0.80)",
      },

      boxShadow: {
        xanhMB: "box-shadow: 0px 6px 12px 0px rgba(63, 140, 255, 0.26)",
      },

      animation: {
        twinkle: "twinkle 2s infinite ease-in-out",
        spinSlow: "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
