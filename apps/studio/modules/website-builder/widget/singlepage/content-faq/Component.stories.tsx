import type { Meta, StoryObj } from "@storybook/react";
import { ContentFaq, defaultContentFaqProps } from "./Component";

const meta = {
  id: "modules-website-builder-models-widget-singlepage-content-faq",
  title: "Modules/Website-Builder/Widget/Singlepage/content-faq",
  component: ContentFaq,
  parameters: { layout: "fullscreen" },
  args: defaultContentFaqProps,
} satisfies Meta<typeof ContentFaq>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
