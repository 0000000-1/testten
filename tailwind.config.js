/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      'sm': '320px',
      'md': '640px',
      'lg': '1024px'
    },
    extend: {},
  },
  plugins: [],
}

