/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-landing": "url('../public/assets/mainImage.svg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      colors: {
        primaryMain: "#F39C12",
        primaryHover: "#F6AA31",
        primaryActive: "#E58F06",
        primaryDisabled: "#B4B5B3",
        primaryContrast: "#FDFFF9",
        secondaryMain: "#2F3237",
        secondaryHover: "#222122",
        secondaryActive: "#1B1B1C",
        secondaryContrast: "#D9D9D9",
        bgDefault: "#0F1011",
        bgAdditional: "#696161",
        bgCard: "#191919",
        bgPaper: "#2B2C31",
        errorMain: "#F39C12",
        errorInput: "#FF2626",
        textPrimary: "#D9D9D9",
        textSecondary: "rgba(28,24,24,0.54)",
      },
      gridAutoColumns: {
        listItem: "minmax(540px, 4fr) 1fr 4fr",
      },
    },
  },
  plugins: [],
};
