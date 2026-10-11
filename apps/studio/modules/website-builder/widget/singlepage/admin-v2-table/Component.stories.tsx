import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as WebsiteBuilderModuleWidget } from "../../index";

const meta = {
  id: "modules-website-builder-models-widget-singlepage-admin-v2-table",
  title: "Modules/Website-Builder/Widget/Singlepage/admin-v2-table",
  component: WebsiteBuilderModuleWidget,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof WebsiteBuilderModuleWidget>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
