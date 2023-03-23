/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        screen1: "url('/src/assets/B.jpeg')"
      },
      colors: {
        'bgClr': '#1F1F38',
        'bgClrVrnt': '#2C2C6C',
        'prmClr': '#4DB5FF',
        'prmClrVrnt': 'rgba(77, 181, 255, 0.4)',
        'white': '#fff',
        'light': 'rgba(255, 255, 255, 0.6)',

        '': '',
      },
      width: {
        medium: "86%",
        large: "75%",
        small: "90%",
      },
      html: {
        scroll: "smooth",
      }
    },
  },
  plugins: [],
  
}
