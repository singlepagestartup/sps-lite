import type { Meta, StoryObj } from "@storybook/react";

import { ArticleRow, defaultArticleRowProps } from "./Component";

const meta = {
  id: "modules-blog-models-article-singlepage-row",
  title: "Modules/Blog/Article/Singlepage/row",
  component: ArticleRow,
  parameters: {
    layout: "padded",
  },
  args: defaultArticleRowProps,
} satisfies Meta<typeof ArticleRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
