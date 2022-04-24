module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      '3xl': { min: "1750px" },

      '2xl': { max: "1555px" },
      // => @media (max-width: 1535px) { ... }

      '1xl': {max : "1440px"},

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "850px" },
      // => @media (max-width: 767px) { ... }

      "2md" : {min : "850px"},

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "450px" },
    },
    extend: {
      backgroundImage: (theme) => ({
        'pencils-img' : "url('/pencils.jpg')"
      }),
      animation: {
        bounce: 'bounce 4s infinite',
        transitionIn: 'blink 0.75s',
        slide: 'slide 0.75s'
      },
      keyframes:{
        blink:{
          '0%':{
             opacity: 0,
             transform: 'rotateX(-10deg)'
          },
          '100%':{
            opacity : 1,
            transform : 'rotateX(0)'
          }
        },
        slide:{
          '0%':{
             opacity: 0,
             transform: 'translateX(-100%)'
          },
          '100%':{
            opacity : 1,
            ransform: 'translateX(0)'
          }
        }
      },
      colors: {
        "dark-black" : "#383838",
        "dark-purple": "#1B1B1B",
        "light-cyan": "#66eece",
        "dark-green" : "#109173",
        "light-white": "#f6f6f6",
        "very-light-cyan": "#c0fff1"
      },
    },
  },
  variants: {
    extends: {
      backgroundColor: ["active"],
    }
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
