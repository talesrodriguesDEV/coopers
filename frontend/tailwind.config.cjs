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
          black: '#06152B',
          gray: '#9499B3',
          orange: '#E88D39'
        }
      }
    },
  },
  plugins: [],
}
