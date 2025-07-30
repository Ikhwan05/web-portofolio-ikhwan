/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        dark1: '#475569',
        dark2: '#1e293b',
      },

      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

