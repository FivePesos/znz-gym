/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        char: "#151515",
        line: "#333333",
        brand: "#c8202a",
        "brand-hi": "#e5333d",
        mute: "#a6a6a2",
        paper: "#f5f5f3",
      },
      fontFamily: {
        head: ['"Big Shoulders Display"', '"Arial Narrow"', "Impact", "sans-serif"],
        body: ["Barlow", "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
      },
      keyframes: {
        rise: {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "none" },
        },
      },
      animation: { rise: "rise .7s cubic-bezier(.2,.7,.2,1) both" },
    },
  },
  plugins: [],
};