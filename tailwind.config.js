module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondary: "#32631e",
        primary: "#4F9333",
        dark: {
          100: "#14171d",
          200: "#303245",
          300: "#464b5d",
          400: "#595567",
        },
        danger:{
          500:"#E4003A",
          600:"#C63C51",
        },
        "green-lightest": "#16db65",
        "green-lightest-thin": "#B4E8A7",
        "green-medium": "#058C42",
        "green-primary": "#04471c",
      },
      screens: {
        sm: "330px",
        mobile: "500px",
        tab: "640px",
        "2xl": "1660px",
      },
    },
  },
};
