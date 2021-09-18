module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "#7E5FA0",
          dark: "#303146",
          light: "#987FB3",
          alt: "#3a3c55",
        },
        highlight: "#a2a7d646",
        secondary: "#81A05F",
        tricary: "#5FA07E",
        dark: "#102a43",
        light: "#1A446C",
        base: "rgb(55, 53, 47)",
        gray: "#4B4B4B",
        grey: "rgb(235, 236, 237)",
        "light-gray": "#696969",
        "dark-gray": "#4F4F4F",
        black: "#201F1B",
        text: {
          black: "rgb(10, 12, 16)",
          white: "#FEFEFE",
        },
        badge: "#a1a5e438",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
