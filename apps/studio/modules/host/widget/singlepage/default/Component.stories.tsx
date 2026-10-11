import type { Meta, StoryObj } from "@storybook/react";
import { HostWidgetDefault } from "./Component";

const meta = {
  id: "modules-host-models-widget-singlepage-default",
  title: "Modules/Host/Widget/Singlepage/default",
  component: HostWidgetDefault,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof HostWidgetDefault>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { name: "default" };
export const Product: Story = {
  args: {
    externalModule: "ecommerce",
  },
};
