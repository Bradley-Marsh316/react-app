module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg-1': '#E6ECFE',
        'bg-2': '#FAFBFF',
        'light': '#707C97',
        'dark': '#0D1C2E',
        'indicator': '#FF3366',
        'active': '#2A8BF2',
        'active-light': '#7CB8F7',
        'active-dark': '#2A8BF2'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp')
  ],
  variants: {
    extend:  {
      fill: ['hover', 'focus'],
      margin: ['first', 'last'],
    },
    scrollbar: ['rounded']
  }
}
