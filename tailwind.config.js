module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#FFCED7',
          100: '#FFB4C2',
          200: '#FF8198',
          300: '#FF4E6F',
          400: '#FF1B45',
          500: '#E7002B',
          600: '#B40022',
          700: '#810018',
          800: '#4E000F',
          900: '#1B0005',
        },
        black: {
          default: '#3D3D3D',
          50: '#B0B0B0',
          100: '#A3A3A3',
          200: '#8A8A8A',
          300: '#707070',
          400: '#575757',
          500: '#3D3D3D',
          600: '#242424',
          700: '#0A0A0A',
          800: '#000000',
        },
      },
    },
  },
}
