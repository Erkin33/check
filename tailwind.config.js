/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Указание на папку src
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px', // Минимальный размер экрана: 320px
      },
    },
  },
  plugins: [],
};
