module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FF3E44",
        prim: "#1C2337",
        bg: "#090A0E",
      },
      fontFamily: {
        nunito: ['"Nunito"'],
        rubik: ['"Rubik"'],
      },
    },
  },
  plugins: [],
};
