// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#B17F4A',
        lightBrown: '#FEFBF8', // 👈 add this line
      },
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { backgroundColor: '#B17F4A' },
          '50%': { backgroundColor: '#ffffff' },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
    },
  },
  plugins: [],
};
