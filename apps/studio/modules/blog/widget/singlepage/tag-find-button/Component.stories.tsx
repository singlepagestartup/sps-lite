import type { Meta, StoryObj } from "@storybook/react";

import { TagFindButton, defaultTagFindButtonProps } from "./Component";

const meta = {
  id: "modules-blog-models-widget-singlepage-tag-find-button",
  title: "Modules/Blog/Widget/Singlepage/tag-find-button",
  component: TagFindButton,
  parameters: { layout: "fullscreen" },
  args: defaultTagFindButtonProps,
} satisfies Meta<typeof TagFindButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
