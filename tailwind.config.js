/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom':{'max':'900px'}
      },
      colors:{
        'text':'#6d6d6d'
      }
    },
  },
  plugins: [],
}

