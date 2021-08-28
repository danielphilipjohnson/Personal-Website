module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  // darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#7E5FA0",
      "primary-dark": "#303146",
      highlight: "#a2a7d646",
      "primary-light": "#987FB3",
      secondary: "#81A05F",
      tricary: "#5FA07E",
      dark: "#102a43",
      light: "#1A446C",
      base: "rgb(55, 53, 47)",
      gray: "#4B4B4B",
      "light-gray": "#696969",
      "dark-gray": "#4F4F4F",
      black: "#201F1B",

      white: "#FEFEFE",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
