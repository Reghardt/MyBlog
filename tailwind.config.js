// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./routes/**/*.tsx", "./islands/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
