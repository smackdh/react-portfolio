/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ozei': "url('../public/Ozei2.png')",
      },
      fontFamily: {
        raleway: 'Raleway',
      },
      colors: {
        zoro: "#cae962",
        darkBase: "#202125"
      }
    },
  },
  plugins: [],
}
