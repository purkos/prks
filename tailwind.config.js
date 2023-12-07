/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors:{
        primaryDark: "rgb(17,17,17)",
        secondaryDark: "rgb(21,21,21)",
        thirdDark: "rgb(26,26,26)",
        primaryGray: "rgb(200,200,200)",
        secondaryGray: "rgb(172,172,172)",
        primaryWhite: "rgba(240,240,240)"
      }
    },
  },
  plugins: [],
}

