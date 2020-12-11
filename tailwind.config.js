module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      width: {
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
      },
      screens: {
        'xs': '420px',
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
