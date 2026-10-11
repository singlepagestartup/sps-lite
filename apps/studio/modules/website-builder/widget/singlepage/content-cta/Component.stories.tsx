import type { Meta, StoryObj } from "@storybook/react";

import { ContentCta, defaultContentCtaProps } from "./Component";

const meta = {
  id: "modules-website-builder-models-widget-singlepage-content-cta",
  title: "Modules/Website-Builder/Widget/Singlepage/content-cta",
  component: ContentCta,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultContentCtaProps,
} satisfies Meta<typeof ContentCta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
