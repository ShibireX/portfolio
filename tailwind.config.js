/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#090909',
        'text-light': '#C9C9C9',
        'text-dim': '#858585',
        'accent-red': '#CB0000',
        'accent-green': '#3FC500',
        'accent-blue': '#0400CB',
      },
      fontFamily: {
        'spartan': ['"League Spartan"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
