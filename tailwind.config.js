/* eslint-disable */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#106745',
        secondary: '#EE4710',
        shadow: '#287658',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}
