/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-50": "#EDF4FF",
        "primary-100": "#B6D2FF",
        "primary-200": "#80B0FF",
        "primary-300": "#498FFF",
        "primary-400": "#2478FF",
        "primary-500": "#0061ff",
        "primary-600": "#003FA4",
        "primary-700": "#003180",
        "primary-800": "#00235B",
        "primary-900": "#001537",
        "secondary-50": "#F4FEFF",
        "secondary-100": "#DDFCFF",
        "secondary-200": "#C7F9FF",
        "secondary-300": "#B0F7FF",
        "secondary-400": "#8EF4FF",
        "secondary-500": "#60efff",
        "secondary-600": "#00CCE2",
        "secondary-700": "#009EB0",
        "secondary-800": "#00717E",
        "secondary-900": "#00444B",
        black: "#000501",
        light: "#fef9ff",
      },
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
    },
  },
  plugins: [],
};
