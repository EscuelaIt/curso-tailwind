const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './**/*.html',
    './**/*.blade.php',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        roja: '0 4px 6px -1px rgba(200, 0, 0, 0.1), 0 2px 4px -1px rgba(200, 0, 0, 0.06)'
      },
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
        primary: { 
          DEFAULT: '#efc',
          '100': '#fdd',
          '200': 'red',
        },
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
