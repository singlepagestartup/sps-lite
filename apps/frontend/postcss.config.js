const path = require("path");

module.exports = {
  plugins: {
    tailwindcss: {
      config: path.join(
        "../../dist/libs/shared/backend/utils/src/lib/tailwind/tailwind.config.js",
      ),
    },
    autoprefixer: {},
    "tailwindcss/nesting": "postcss-nesting",
  },
};
