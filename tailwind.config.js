/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './<custom-folder>/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBlue: '#0077b6',
        darkBlue: '#004e98',
        lightGray: '#dee2e6',
        darkGray: '#495057',
        lightRed: '#ffccd5',
        darkRed: '#a4133c',
      },
    },
  },
  plugins: [],
};
