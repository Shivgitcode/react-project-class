/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": ["#ffff00"]
      },
      fontFamily: {
        "open": ["Open Sans", "sans-serif"],
        "sanchez": ["Sanchez", "serif"]
      }
    },
  },
  plugins: [],
}