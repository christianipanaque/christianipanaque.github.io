const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,scss}", // Include custom global styles (optional)

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "ui-serif", "serif"],
        roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        body: {
          padding: "20px 20px 20px 20px",
          fontFamily: theme("fontFamily.roboto"),
          fontSize: theme("fontSize.xl"),
        },
        h1: {
          fontFamily: theme("fontFamily.merriweather"),
          fontSize: theme("fontSize.5xl"),
          color: theme("colors.stone.800"),
          marginTop: theme("spacing.5"),
          marginBottom: theme("spacing.7"),
          fontWeight: "bold",
          textAlign: "center",
        },
        h2: {
          fontFamily: theme("fontFamily.merriweather"),
          fontSize: theme("fontSize.3xl"),
          color: theme("colors.stone.800"),
          marginTop: theme("spacing.6"),
          marginBottom: theme("spacing.6"),
          fontWeight: "bold",
          textAlign: "center",
        },
        img: {
          height: "auto",
          width: "100%",
          boxShadow: "4px 4px 4px #9a9a9a",
        },
        nav: {
          paddingBottom: "20px",
        },
        label: {
          fontSize: theme("fontSize.xl"),
        },
        input: {
          padding: "0 7px 0 7px"
        }
      });
    }),
  ],
};
