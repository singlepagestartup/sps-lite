import { Component as BlogModuleWidget } from "../../../widget/index";
import type { Meta, StoryObj } from "@storybook/react";

import {
  ArticleOverviewDefault,
  defaultArticleOverviewDefaultProps,
} from "./Component";

const meta = {
  id: "modules-blog-models-article-singlepage-overview-default",
  title: "Modules/Blog/Article/Singlepage/overview-default",
  component: ArticleOverviewDefault,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultArticleOverviewDefaultProps,
  argTypes: { tagsCard: { control: false } },
  render: (args) => (
    <ArticleOverviewDefault
      {...args}
      tagsCard={
        <BlogModuleWidget
          variant="article-find-by-id-tag-find-default"
          tags={args?.tags}
        />
      }
    />
  ),
} satisfies Meta<typeof ArticleOverviewDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
