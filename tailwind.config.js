/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        customBackground: '#212733',
        customColor:"#ACDDFB"
      },
    },
  },
  plugins: [],
}

