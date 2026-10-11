import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as NotificationModuleNotification } from "../../index";

const meta = {
  id: "modules-notification-models-notification-singlepage-admin-v2-table",
  title: "Modules/Notification/Notification/Singlepage/admin-v2-table",
  component: NotificationModuleNotification,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof NotificationModuleNotification>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
