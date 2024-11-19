const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss}", // Include custom global styles (optional)

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "ui-serif", "serif"],
        roboto: ["Roboto", "sans-serif"]
      }
    }
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box"
        },
        body: {
          fontFamily: theme("fontFamily.roboto"),
          color: theme("colors.stone.800")
        },
        h1: {
          fontFamily: theme("fontFamily.merriweather")
        },
        h2: {
          fontFamily: theme("fontFamily.merriweather")
        },
        input: {
          padding: "0 7px 0 7px"
        }
      });
    })
  ]
};
