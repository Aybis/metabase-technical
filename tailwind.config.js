/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        apps: {
          background: '#D9D9D9',
          button: '#5F7BE1',
          text: '#5C5C5C',
          danger: '#EF4949',
        },
      },
    },
  },
  plugins: [],
};
