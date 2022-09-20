/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primaryDark: "#d60b52",
      primaryMid: "#d60b52",
      primaryLight: "#d60b52",
      primaryExtraLight: "#d60b52",
      secondaryLight: "#f9b11c",
      secondaryDark: "#f9b11c",
      greyStandard: "#707070",
      greyDark: "#666666",
      blueDark: "#29235c",
      black: "#000",
      white: "#fff",
      red: "#ED1C24",
      redLight: "#F9E4E5",
      redDark: "#7C4147",
      orange: "#FBB03B",
      orangeLight: "#F9EEE1",
      orangeDark: "#F7931E",
      green: "#1CA66C",
      greenLight: "#EDF2EF",
      greenDark: "#14734B",
    },
    extend: {
      fontFamily: {
        primary: ["Merriweather", ...fontFamily.sans],
        title: ["Wreath", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
