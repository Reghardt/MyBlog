/** @type {import('./node_modules/tailwindcss/types/config.d.ts').Config} */
module.exports = {
  content: ["./routes/**/*.tsx", "./islands/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
