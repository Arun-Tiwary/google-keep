/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        500: "500px",
      },
      colors: {
        "custom-yellow": "#feefc3",
        "custom-gray": "#f1f3f4",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
