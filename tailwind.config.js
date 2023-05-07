/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      "dark-magenta": "hsl(300, 43%, 22%)",
      "soft-pink": "hsl(333, 80%, 67%)",
      "dark-grayish-magenta": "hsl(303, 10%, 53%)",
      "light-grayish-magenta": "hsl(300, 24%, 96%)",
      "white": "#fff"
    },
    screens:{
      mobile: "375px",
      laptop: "1440px"
    },
    extend: {
      fontFamily:{
        'league-spartan': ['League Spartan', 'sans-serif']
      },
      fontWeight:{
        regular: 400,
        medium: 500,
        bold: 700
      }
    },
  },
  plugins: [],
}

