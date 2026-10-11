import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as SocialModuleChat } from "../../index";

const meta = {
  id: "modules-social-models-chat-singlepage-admin-v2-table",
  title: "Modules/Social/Chat/Singlepage/admin-v2-table",
  component: SocialModuleChat,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof SocialModuleChat>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
