// Design tokens from the Redesign 2026 Figma file (color/* variables).
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2a2a2a",
        night: "#1a1a1a",
        gold: "#b09b71",
        "gold-deep": "#927845",
        cream: "#ffffff",
        paper: "#f1eee8",
        sand: "#ebe6db",
        line: "#e1dacb",
        muted: "#6d6d6d",
        danger: "#b3261e",
      },
      fontFamily: {
        sans: ['"Montserrat"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1440px",
      },
      boxShadow: {
        float: "0 8px 24px rgba(26, 26, 26, 0.22)",
        modal: "0 24px 64px rgba(26, 26, 26, 0.28)",
      },
      keyframes: {
        "fade-in": { from: { opacity: 0 }, to: { opacity: 1 } },
        "rise-in": {
          from: { opacity: 0, transform: "translateY(12px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 160ms ease-out",
        "rise-in": "rise-in 200ms ease-out",
      },
    },
  },
  plugins: [],
};
