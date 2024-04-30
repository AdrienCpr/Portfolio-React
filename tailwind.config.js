/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkPrimary: 'var(--color-dark-primary)',
        darkSecondary: 'var(--color-dark-secondary)',
        darkTertiary: 'var(--color-dark-tertiary)',
        darkQuaternary: 'var(--color-dark-quaternary)',

        lightPrimary: 'var(--color-light-primary)',
        lightSecondary: 'var(--color-light-secondary)',
        lightTertiary: 'var(--color-light-tertiary)',
        lightQuaternary: 'var(--color-light-quaternary)',
      },
    },
  },
  plugins: [],
}

