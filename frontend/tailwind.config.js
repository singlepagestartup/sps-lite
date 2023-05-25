/* @type {import('tailwindcss').Config} */
/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

let themeFile;
try {
  themeFile = require("./themes/theme.json");
} catch (error) {
  console.log("No theme file");
}

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,tsx}",
    "./src/**/**/*.{html,js,jsx,tsx}",
    "./pages/*.{html,js,jsx,tsx}",
    "./pages/**/*.{html,js,jsx,tsx}",
  ],
  safelist: [
    { pattern: /^p(\w?)-/ },
    { pattern: /w-(1|2|3|4|5|6|7|8|9|10|11)\/12/ },
    { pattern: /grid-cols-(1|2|3|4|5|6|7|8|9|10|11|12)/ },
    { pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/ },
    {
      pattern: /aspect-w-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /aspect-h-(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20)/,
      variants: ["sm", "md", "lg", "xl"],
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: colors.indigo[50],
          300: colors.indigo[300],
          400: colors.indigo[400],
          500: colors.indigo[500],
          600: colors.indigo[600],
          700: colors.indigo[700],
          900: colors.indigo[900],
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  darkMode: "class",
};

if (themeFile && themeFile.theme?.colors) {
  for (const color of Object.keys(config.theme.extend.colors)) {
    if (themeFile.theme.colors[color]) {
      for (const rate of Object.keys(config.theme.extend.colors[color])) {
        if (themeFile.theme.colors[color][rate]) {
          config.theme.extend.colors[color][rate] =
            themeFile.theme.colors[color][rate];
        }
      }
    }
  }
}

module.exports = config;
