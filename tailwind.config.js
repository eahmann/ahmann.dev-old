/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ff8800'
        },
        pizazz: {
          50: '#fff9f2',
          100: '#fff3e6',
          200: '#ffe1bf',
          300: '#ffcf99',
          400: '#ffac4d',
          500: '#ff8800',
          600: '#e67a00',
          700: '#bf6600',
          800: '#995200',
          900: '#7d4300'
        }
      },
      fontFamily: {
        roboto: ['Roboto Mono', 'monospace'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
