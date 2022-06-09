/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {
      colors: {
        primary: "#3b82f6",
        grey: "#64748b",
        dark: "#1e293b",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
