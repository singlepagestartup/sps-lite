import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as SocialModuleAttributeKey } from "../../index";
const meta = {
  id: "modules-social-models-attribute-key-singlepage-list",
  title: "Modules/Social/Attribute-Key/Singlepage/list",
  component: SocialModuleAttributeKey,
  args: { variant: "list", count: 3, empty: false },
  argTypes: {
    count: { control: { type: "number", min: 0, max: 50 } },
    empty: { control: "boolean" },
  },
} satisfies Meta<typeof SocialModuleAttributeKey>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Empty: Story = { args: { empty: true } };
export const Many: Story = { args: { count: 20 } };
