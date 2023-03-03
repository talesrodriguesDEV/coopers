/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        coopers: {
          green: '#46BD62',
          black: '#06152B'
        }
      }
    },
  },
  plugins: [],
}
