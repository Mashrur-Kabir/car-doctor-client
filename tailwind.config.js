/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", 'serif'],
        cant: ["Cantarell", 'serif'],
        pluto: ["Pluto", 'serif'],
      },
    },
  },
  plugins: [],
}