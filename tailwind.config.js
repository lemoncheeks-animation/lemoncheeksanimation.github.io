/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md-lg': '900px',
        'md-md-lg': '1250px',
        'lg': '1450px',
      },
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}