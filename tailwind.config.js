/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
