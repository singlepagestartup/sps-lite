import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as WebsiteBuilderModuleButton } from "../../index";
const meta = {
  id: "modules-website-builder-models-button-singlepage-list",
  title: "Modules/Website-Builder/Button/Singlepage/list",
  component: WebsiteBuilderModuleButton,
  args: { variant: "list", count: 3, empty: false },
  argTypes: {
    count: { control: { type: "number", min: 0, max: 50 } },
    empty: { control: "boolean" },
  },
} satisfies Meta<typeof WebsiteBuilderModuleButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Empty: Story = { args: { empty: true } };
export const Many: Story = { args: { count: 20 } };
