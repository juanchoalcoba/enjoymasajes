/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e2c275',
        secondary: '#0a0a0a',
        accent: '#ffffff',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Instrument Sans', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2.5rem',
        '3xl': '4rem',
      },
    },
  },
  plugins: [],
}
