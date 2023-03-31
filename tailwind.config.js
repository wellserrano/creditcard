import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-source-sans-pro)', ...fontFamily.sans],
      },
      borderRadius: {
        ellipse: '50%'
      }
    },
  },
  plugins: [],
}

