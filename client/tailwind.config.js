/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{css,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        main: {
          xDark: 'var(--main-xDark)',
          dark: 'var(--main-dark)',
          DEFAULT: 'var(--main)',
          light: 'var(--main-light)',
          xLight: 'var(--main-xLight)',

          border: 'var(--main-border)',
          text: 'var(--main-text)',
        },

        secondary: {
          orange : {
            DEFAULT: 'var(--secondary-orange)',
            border: 'var(--secondary-orange-border)',
          },
          yellow: {
            DEFAULT: 'var(--secondary-yellow)',
            border: 'var(--secondary-border)',
          },
          text: 'var(--secondary-text)',
        },

        customWhite: {
          0: 'var(--white-0)',
          100: 'var(--white-100)',
          200: 'var(--white-200)',
          300: 'var(--white-300)',
          400: 'var(--white-400)',
          500: 'var(--white-500)',
          600: 'var(--white-600)',
          700: 'var(--white-700)',
          800: 'var(--white-800)',
          900: 'var(--white-900)',
          950: 'var(--white-950)',
        },

        customBlack: {
          0: 'var(--black-0)',
          100: 'var(--black-100)',
          200: 'var(--black-200)',
          300: 'var(--black-300)',
          400: 'var(--black-400)',
          500: 'var(--black-500)',
          600: 'var(--black-600)',
          700: 'var(--black-700)',
          800: 'var(--black-800)',
          900: 'var(--black-900)',
          950: 'var(--black-950)',
        }
      }
    },
  },
  plugins: [],
}

