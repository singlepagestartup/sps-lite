import type { Meta, StoryObj } from "@storybook/react";
import {
  ArticleFindCardDefault,
  defaultArticleFindCardDefaultProps,
} from "./Component";

const meta = {
  id: "modules-blog-models-widget-singlepage-article-find-card-default",
  title: "Modules/Blog/Widget/Singlepage/article-find-card-default",
  component: ArticleFindCardDefault,
  parameters: { layout: "fullscreen" },
  args: defaultArticleFindCardDefaultProps,
} satisfies Meta<typeof ArticleFindCardDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
