module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#FE5F1E",
        primaryhover: "#b23301",
        secondary: "#F8F8F8",
        accent: "#232323",
        nutral: "#ccc",
      },
    },
  },
  plugins: [],
};
