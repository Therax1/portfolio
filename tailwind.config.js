/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        noir: "#222222",
        cardColor: "#2A2A2A",
        gray: "#C5C5C5",
        footer: "#191919"
      },
      backgroundImage: {
        avartarLinearGradient: "linear-gradient(to right, #FF8660, #9A33FF)",
        projectLinearGradient: "linear-gradient(to bottom, #FF8660, #D5491D)",
        xpLinearGradient: "linear-gradient(to bottom, #5BADFF, #1373D1)"
      },
      boxShadow: {
        'red-glow': '-5px 2px 81px -34px #1373D1',
      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

