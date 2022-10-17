/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'gold': '#A18A68',
      'black':'#000000',
      'white':'#FFFFFF',
      'dark-gray': '#707070',
      'gray': '#D8D8D8',
      'light-gray': '#EFEFEF',
      'errors': '#D82700'
    },
    extend: {
      screens: {
        xs: '480px',
        sm: '1280px',
        md: '1440px',
        lg: '3072px',
        xl: '3840px',
      },  
    },
  },
  plugins: [],
}
