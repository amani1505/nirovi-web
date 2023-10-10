/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,ts}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{html,ts}"],

  // darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#94c5cc",
      secondary: "#b4d2e7",
      black: "black",
      white: "white",
    },
    fontFamily: {
      "pt-serif": ["PT Serif", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
      raleway: ["Raleway"],
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "100%": "100%",
    },
    extend: {
      backgroundImage: {
        underline1: "url('./assets/icons/Underline1.svg')",
        underline2: "url('./assets/icons/Underline2.svg')",
        underline3: "url('./assets/icons/Underline3.svg')",
        underline4: "url('./assets/icons/Underline4.svg')",
        highlight3: "url('./assets/icons/Highlight3.svg')",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
