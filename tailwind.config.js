/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.js"],
  content: ["./Main.js"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer"), require("tailwind-scrollbar-hide")],
};