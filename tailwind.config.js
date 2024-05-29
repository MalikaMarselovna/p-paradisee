
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'max': '380px'},
      'ipad': {'max': '990px'},
      'mmm': {'max': '580px'},
      'col': {'max': '1200px'},
      'ft': {'max': '780px'},
      'smm': '380px',
      'mm': '580px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
  
      'md': '780px',
      // => @media (min-width: 768px) { ... }
  
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
  
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
  
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}