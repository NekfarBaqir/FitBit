/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#2E90EA",
        Secondary: "#5F5F5F",
        grayBg:"#F6F6F6"
      },
    },
  },
  plugins: [
  ],
};
