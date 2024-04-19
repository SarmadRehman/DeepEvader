/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          main: '#0F1427',
          secondary: '#0E1221',
          tertiary: '#070A15',
          light: '#0B0F1D',
          cool: '#171B2E',
          off: '#283152',
        },
        blue: {
          main: '#05A1C7',
        },
        success: '#2CFF80',
        error: '#FF382C',
        OffWhite: '#F7F8FF',
        gray: '#646E92',
        GraySecondary: '#222841',
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
