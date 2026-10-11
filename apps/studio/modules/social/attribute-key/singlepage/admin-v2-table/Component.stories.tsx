import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as SocialModuleAttributeKey } from "../../index";

const meta = {
  id: "modules-social-models-attribute-key-singlepage-admin-v2-table",
  title: "Modules/Social/Attribute-Key/Singlepage/admin-v2-table",
  component: SocialModuleAttributeKey,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof SocialModuleAttributeKey>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
