/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      midnight: '#1E1B1E',
      pink: '#aa66aa',
      green: '#66aa66',
      brown: '#977862',
      gray: '#404040',
      white: '#fff',
      white50: '#8e8e8e',
      white75: '#c7c7c7',
      black: '#1d1d1d',
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
