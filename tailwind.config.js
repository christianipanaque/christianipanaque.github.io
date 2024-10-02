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
      },
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
          padding: "30px 20px 20px 20px",
        },
        h1: {
          fontFamily: theme("fontFamily.merriweather"),
          fontSize: theme("fontSize.2xl"),
          color: theme("colors.stone.800"),
          marginBottom: theme("spacing.4"),
          marginTop: theme("spacing.3"),
          fontWeight: "bold",
          textAlign: "center",
        },
        h2: {
          fontFamily: theme("fontFamily.merriweather"),
          fontSize: theme("fontSize.2xl"),
          color: theme("colors.stone.800"),
          marginBottom: theme("spacing.4"),
          marginTop: theme("spacing.3"),
          fontWeight: "bold",
          textAlign: "center",
        },
        img: {
          height: "auto",
          width: "100%",
          boxShadow: "4px 4px 4px #9a9a9a", // Add custom box-shadow
        },
        nav: {
          paddingBottom: "20px",
        },
      });
    }),
  ],
};
