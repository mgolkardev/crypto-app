/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    minWidth: {
      mobile: "375px",
      medium: "60px",
    },
    height: {
      medium: "32px",
    },
    extend: {},
  },
  plugins: [],
};
