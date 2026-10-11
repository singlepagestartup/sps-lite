import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCover, defaultArticleCoverProps } from "./Component";

const meta = {
  id: "modules-blog-models-article-singlepage-cover",
  title: "Modules/Blog/Article/Singlepage/cover",
  component: ArticleCover,
  parameters: { layout: "fullscreen" },
  args: defaultArticleCoverProps,
} satisfies Meta<typeof ArticleCover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
