/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],

  theme: {
    screens: {
      sm: '480',
      md: '768',
      lg: '976',
      xl: '1440',
    },
    colors: {
      lightBlue: '#0096ff',
    },
    extend: {},
  },
  plugins: [],
};
