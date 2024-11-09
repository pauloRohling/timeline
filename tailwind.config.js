const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    fontSize: {
      10: ["0.625rem", { lineHeight: "0.875rem", letterSpacing: "0.01rem" }],
      11: ["0.688rem", { lineHeight: "0.875rem", letterSpacing: "0.005rem" }],
      12: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0" }],
      13: ["0.8125rem", { lineHeight: "1rem", letterSpacing: "-0.003rem" }],
      14: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "-0.006rem" }],
      16: ["1rem", { lineHeight: "1.375rem", letterSpacing: "-0.011rem" }],
      18: ["1.125rem", { lineHeight: "1.625rem", letterSpacing: "-0.014rem" }],
      20: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.017rem" }],
      24: ["1.5rem", { lineHeight: "2.125rem", letterSpacing: "-0.019rem" }],
      30: ["1.875rem", { lineHeight: "2.625rem", letterSpacing: "-0.021rem" }],
      40: ["2.5rem", { lineHeight: "3.5rem", letterSpacing: "-0.022rem" }],
    },

    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        "inter-var": ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
