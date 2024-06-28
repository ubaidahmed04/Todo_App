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
      screens: {
        'sm': '400px',  // Change this value to your desired breakpoint
        // Customize other breakpoints if needed
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors:{
        customBackground: '#212733',
        customColor:"#ACDDFB"
      },
    },
  },
  plugins: [],
}

