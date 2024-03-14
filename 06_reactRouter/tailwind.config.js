/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgbtn: "#2dc08d",
        gradientcolor1: "#604cc7",
        gradientcolor2: "#44327b",
        regalblue: "linear-gradient(90deg, #604cc7, #44327b);",
        primary: "#010851",
        secondry: "#9A7AF1",
        ternary: "#707070",
        pink: "#EE9AE5",
      },
    },
  },
  plugins: [],
};
