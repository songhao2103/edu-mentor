/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        strokeM: "#79859F",
        XanhMobifone: "#004390",
        White: "#fff",
      },

      boxShadow: {
        xanhMB: "box-shadow: 0px 6px 12px 0px rgba(63, 140, 255, 0.26)",
      },
    },
  },
  plugins: [],
};
