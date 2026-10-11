import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as BroadcastModuleChannel } from "../../index";

const meta = {
  id: "modules-broadcast-models-channel-singlepage-admin-v2-table",
  title: "Modules/Broadcast/Channel/Singlepage/admin-v2-table",
  component: BroadcastModuleChannel,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof BroadcastModuleChannel>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
