import type { Meta, StoryObj } from "@storybook/react";

import { FooterCompact, defaultFooterCompactProps } from "./Component";

const meta = {
  id: "modules-website-builder-models-widget-singlepage-footer-compact",
  title: "Modules/Website-Builder/Widget/Singlepage/footer-compact",
  component: FooterCompact,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultFooterCompactProps,
} satisfies Meta<typeof FooterCompact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
