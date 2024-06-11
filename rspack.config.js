const rspack = require("@rspack/core");
/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: "./libs/modules/startup/models/widget/frontend/component/variants/sps-lite/admin-table-row/src/index.ts",
  },
  resolve: {
    extensions: ["...", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: [/[\\/]node_modules[\\/]/],
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              sourceMap: true,
              jsc: {
                parser: {
                  syntax: "typescript",
                },
                externalHelpers: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(jsx|tsx)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              sourceMap: true,
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                },
                externalHelpers: true,
                transform: {
                  react: {
                    runtime: "automatic",
                  },
                },
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [],
};

module.exports = config;
