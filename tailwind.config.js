/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['"Open Sans"'],
        manrope:['"Manrope"']
      }
    },
  },
  plugins: [],
}
