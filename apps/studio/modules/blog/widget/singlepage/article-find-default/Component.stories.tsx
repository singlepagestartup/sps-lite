import type { Meta, StoryObj } from "@storybook/react";

import {
  ArticleFindDefault,
  defaultArticleFindDefaultProps,
} from "./Component";

const meta = {
  id: "modules-blog-models-widget-singlepage-article-find-default",
  title: "Modules/Blog/Widget/Singlepage/article-find-default",
  component: ArticleFindDefault,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultArticleFindDefaultProps,
} satisfies Meta<typeof ArticleFindDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
