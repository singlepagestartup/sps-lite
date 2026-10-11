import type { Meta, StoryObj } from "@storybook/react";

import { BlogFindArticleCard } from "./Component";

const meta = {
  id: "modules-host-models-page-singlepage-blog-module-article-find",
  title: "Modules/Host/Page/Singlepage/blog-module-article-find",
  component: BlogFindArticleCard,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BlogFindArticleCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
