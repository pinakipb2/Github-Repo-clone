/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'segoe-UI': ['Segoe UI'],
      },
    },
    screens: {
      sm: '544px',
      md: '768px',
      lg: '1012px',
    },
  },
  plugins: [],
  important: true,
};
