/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1f283b' // Replace with your desired dark blue color
      },
    },
  },
  plugins: [],
};
