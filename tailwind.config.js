const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '420': '420px',
      },
      minWidth: {
        '300': '300px',
        '400': '400px',
      },
      gridTemplateColumns: {
        'main_md': '1fr 300px',
        'main_lg': '200px 1fr 300px'
      },
      colors: {
        primary: '#efc',
        secondary: '#666',
        orange: colors.orange,
      },
      screens: {
        'xs': '420px',
      },
      fontFamily: {
        fantasy: ['Oswald'],
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
