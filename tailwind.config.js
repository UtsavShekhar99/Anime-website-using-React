/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ditty: ["Ditty", "sans-serif"], // Register the Ditty font
      },
    },
  },
  plugins: [],
};
