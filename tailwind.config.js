/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      dropShadow: {
        'lg': '0 10px 20px rgba(0, 0, 0, 0.1)',
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
