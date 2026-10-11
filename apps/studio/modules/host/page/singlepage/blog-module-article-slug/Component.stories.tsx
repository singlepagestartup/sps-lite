import type { Meta, StoryObj } from "@storybook/react";

import { BlogFindByIdArticleOverview } from "./Component";

const meta = {
  id: "modules-host-models-page-singlepage-blog-module-article-slug",
  title: "Modules/Host/Page/Singlepage/blog-module-article-slug",
  component: BlogFindByIdArticleOverview,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BlogFindByIdArticleOverview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
