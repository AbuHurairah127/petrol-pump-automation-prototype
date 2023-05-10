/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './<custom-folder>/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBlue: '#caf0f8',
        darkBlue: '#0077b6',
      },
    },
  },
  plugins: [],
};
