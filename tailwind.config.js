/* eslint-disable no-undef */
module.exports = {
  content: ['./**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
  daisyui: {
    styled: false,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: ['light', 'dark']
  }
}
