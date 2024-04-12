/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonColor: '#FFAD4C',
        baseColor: '#0A2B4F',
        secondaryColor: '#EFC183',
        blackColor: '#000000',
        whitheColor:'#FFFFFF',
        grayTextColor: '#CFD9E0',
        bgColor: '#F7FAFC',
      },
      fontFamily: {
        nunito: ['"Nunito"']
      }
    },
  },
  plugins: [],
}

