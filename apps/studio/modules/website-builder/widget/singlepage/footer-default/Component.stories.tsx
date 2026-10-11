import type { Meta, StoryObj } from "@storybook/react";

import { FooterDefault, defaultFooterDefaultProps } from "./Component";

const meta = {
  id: "modules-website-builder-models-widget-singlepage-footer-default",
  title: "Modules/Website-Builder/Widget/Singlepage/footer-default",
  component: FooterDefault,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultFooterDefaultProps,
} satisfies Meta<typeof FooterDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
