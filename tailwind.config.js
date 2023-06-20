/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        purple: "#e36b8d",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-blue": "#2396ba",
        "dark-yellow": "#dbb54d",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        // "gradient-rainbow":
        //   "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainbow":
          "linear-gradient(90deg, rgba(44,188,233,1) 0%, rgba(227,107,141,1) 33%, rgba(233,131,124,1) 62%, rgba(253,204,73,1) 100%)",

        "gradient-rainblue":
          "linear-gradient(90deg, rgba(44,188,233,1) 0%, rgba(227,107,141,1) 33%, rgba(233,131,124,1) 62%, rgba(253,204,73,1) 100%)",
        // "gradient-rainblue":
        //   "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
        "gradient-rain-yellow":
          "linear-gradient(315deg, #f6d327 0%, #de4daa 74%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        "avatar-border": "url(./assets/avatar-back.png)",
        brush: "url('./assets/brush.png')",
        logo: "url('./assets/logo.png')",
        brushY: "url('./assets/brushY.png')",
        brushY_2: "url('./assets/brushY-2.png')",
        alem: "url('./assets/alem.png')",
        turing: "url('./assets/turing.png')",
        NU: "url('./assets/NU.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
