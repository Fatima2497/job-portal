/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        whiteColor:"#FFF",
        secondaryColor:"#E5EEFF",
        primaryColor:"#3F6EEC",
        primaryTextColor:"#05264E",
        textColor:"#777777",
      },
      keyframes:{
        move:{
          "50%": {transform: 'translateY(-1rem)'}
        }
      },
      animation:{
        'movingY':'move 2s linear infinite'
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'1.5rem'
      }
    },
    fontFamily:{
      hindu:['Hindu Madurai','sans-serif'],
      readex:['Readex Pro','sans-serif']
    }
  },
  plugins: [],
}
