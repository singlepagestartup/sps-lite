import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as BroadcastModuleMessage } from "../../index";

const meta = {
  id: "modules-broadcast-models-message-singlepage-admin-v2-table",
  title: "Modules/Broadcast/Message/Singlepage/admin-v2-table",
  component: BroadcastModuleMessage,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof BroadcastModuleMessage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
