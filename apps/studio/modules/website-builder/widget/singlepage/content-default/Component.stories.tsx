import type { Meta, StoryObj } from "@storybook/react";

import { ContentDefault, defaultContentProps } from "./Component";

const meta = {
  id: "modules-website-builder-models-widget-singlepage-content-default",
  title: "Modules/Website-Builder/Widget/Singlepage/content-default",
  component: ContentDefault,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultContentProps,
} satisfies Meta<typeof ContentDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
