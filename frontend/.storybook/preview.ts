import type { Preview } from "@storybook/react";
import "../styles/tailwind.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    nextjs: {
      router: {
        basePath: "/",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
