import type { Meta, StoryObj } from "@storybook/react";

import {
  ArticleFindByIdTagFind,
  defaultArticleFindByIdTagFindProps,
} from "./Component";

const meta = {
  id: "modules-blog-models-widget-singlepage-article-find-by-id-tag-find-default",
  title: "Modules/Blog/Widget/Singlepage/article-find-by-id-tag-find-default",
  component: ArticleFindByIdTagFind,
  parameters: { layout: "padded" },
  args: defaultArticleFindByIdTagFindProps,
} satisfies Meta<typeof ArticleFindByIdTagFind>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
