/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      red: "#F02849",
      "gray-100": "#F0F2F5",
      "gray-200": "#050505",
      "gray-300": "#f0f2f5",
      "gray-400": "#8A8D91",
      "gray-500": "#8c8c8c",
      "gray-600": "#E4E6EB"
    },
    opacity: {
      "0": "0",
      "05": ".05",
      "25": ".25",
      "50": ".5",
      "75": ".75",
      "10": ".1",
      "20": ".2",
      "30": ".3",
      "40": ".4",
      "50": ".5",
      "60": ".6",
      "70": ".7",
      "80": ".8",
      "90": ".9",
      "100": "1"
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: ["components/**/*.vue", "layouts/**/*.vue", "pages/**/*.vue", "plugins/**/*.js", "nuxt.config.js"]
  }
};
