/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        borderRadius: "rounded",
      },
    },
  },
  plugins: [],
};
