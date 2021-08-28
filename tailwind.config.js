module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        shark: "url('./homeshark.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
