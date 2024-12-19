/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#EE9F26',
        'red': '#E34A2B',
        'gray': '#989494',
      },
    },
  },
  plugins: [],
}