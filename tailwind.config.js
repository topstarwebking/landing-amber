/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6ECCFF",
        accent: "#FFBCDD",
        background: "#F2F6FF",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        theme: {
          "base-100": "#ffffff", // dark or light theme
          primary: "#6eccff",
          secondary: "#ffbcdd",
          accent: "#1FB2A6",
          neutral: "#191D24",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
