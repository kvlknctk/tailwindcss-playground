const { colors } = require('tailwindcss/defaultTheme')


module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        apifiz: {
          bg : '#f7f0ed'
        }
      }
    },
  },
  variants: {},
  plugins: [],
};
