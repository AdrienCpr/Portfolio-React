/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkPrimary: '#1a202c',
        darkSecondary: '#2d3748',
        darkTertiary: "#064663",
        darkQuaternary: "#ECB365",
        lightPrimary: '#ffffff',
        lightSecondary: '#F3F4F6',
        lightTertiary: "#6B7280",
        lightQuaternary: "#000000"
      },
    },
  },
  plugins: [],
}

