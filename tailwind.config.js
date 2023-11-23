/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        500: "500px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
