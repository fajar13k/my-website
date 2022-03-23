module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#30E286',
      secondary: '#FC440F',
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        turqoise: {
          50: '#EDFCF5',
          100: '#DBFAEA',
          200: '#B7F5D5',
          300: '#87ECB8',
          400: '#4CE696',
          500: '#30E286',
          600: '#3BE38C',
          700: '#1CC46D',
          800: '#19B363',
          900: '#17A15A',
        },
        sunset: {
          50: '#FECFC2',
          100: '#FEB09A',
          200: '#FD8D6E',
          300: '#FF744E',
          400: '#FD6035',
          500: '#FC440F',
          600: '#F23602',
          700: '#DE3202',
          800: '#CA2D02',
          900: '#A22402',
        },
      },
    },
  },
  plugins: [],
};
