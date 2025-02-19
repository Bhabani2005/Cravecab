/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],

  extend: {
    backgroundImage:{
      'hero':"url('../public/header_img.png')"
    }
  }
}

