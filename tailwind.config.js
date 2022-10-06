/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '1440px',
        lg: '3072px',
        xl: '3840px',
      },  
    },
  },
  plugins: [],
}
