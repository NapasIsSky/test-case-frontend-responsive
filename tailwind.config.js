/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      },
      height: {
        'screen-80': '80vh'
      },
      flexGrow: {
        '1': 1,
        '2': 2,
        '3': 3
      }
    },
  },
  plugins: [],
}