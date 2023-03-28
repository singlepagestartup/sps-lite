import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        loadSassAfterPostCSS: true,
      },
    },
  ],
  staticDirs: ["../public"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: false,
  },
};
export default config;
