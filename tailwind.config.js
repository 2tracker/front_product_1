/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {

        'xs': '479px',
        // => @media (min-width: 479px) { ... }

        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // // => @media (min-width: 1536px) { ... }
      },
      colors:{
        "light-blue" :"#60a5fa",
        "white" : '#fff'
      }
    },
  },
  plugins: [],
}