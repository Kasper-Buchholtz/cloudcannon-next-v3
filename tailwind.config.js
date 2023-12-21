/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx,css}",
    "./components-library/**/*.{js,jsx,ts,tsx,css}",
    "./pages/**/*.{js,jsx,ts,tsx,css}",
    "./content/**/*.{js,jsx,ts,tsx,css}",
    "./data/**/*.{js,jsx,ts,tsx,css}",
    "./lib/**/*.{js,jsx,ts,tsx,css}",
    "components/layouts/**/*.{js,jsx,ts,tsx,css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

