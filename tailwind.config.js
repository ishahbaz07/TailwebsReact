/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f47920',
          dark: '#d96810',
        },
        secondary: '#1e3a5f',
        navy: '#1a2e4a',
        cyan: {
          DEFAULT: '#00b4d8',
          light: '#26c6da',
          bright: '#00bcd4',
        },
        sky: {
          light: '#dbeafe',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
