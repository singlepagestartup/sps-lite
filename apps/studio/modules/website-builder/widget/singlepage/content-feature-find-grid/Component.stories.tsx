import type { Meta, StoryObj } from "@storybook/react";
import {
  ContentFeatureFindGrid,
  defaultContentFeatureFindGridProps,
} from "./Component";

const meta = {
  id: "modules-website-builder-models-widget-singlepage-content-feature-find-grid",
  title: "Modules/Website-Builder/Widget/Singlepage/content-feature-find-grid",
  component: ContentFeatureFindGrid,
  parameters: { layout: "fullscreen" },
  args: defaultContentFeatureFindGridProps,
} satisfies Meta<typeof ContentFeatureFindGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
