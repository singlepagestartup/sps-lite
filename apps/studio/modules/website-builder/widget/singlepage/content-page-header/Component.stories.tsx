import type { Meta, StoryObj } from "@storybook/react";
import { ContentPageHeader, defaultContentPageHeaderProps } from "./Component";

const meta = {
  id: "modules-website-builder-models-widget-singlepage-content-page-header",
  title: "Modules/Website-Builder/Widget/Singlepage/content-page-header",
  component: ContentPageHeader,
  parameters: { layout: "fullscreen" },
  args: defaultContentPageHeaderProps,
} satisfies Meta<typeof ContentPageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
