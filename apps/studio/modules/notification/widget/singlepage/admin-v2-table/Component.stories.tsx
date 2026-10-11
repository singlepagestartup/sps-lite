import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as NotificationModuleWidget } from "../../index";

const meta = {
  id: "modules-notification-models-widget-singlepage-admin-v2-table",
  title: "Modules/Notification/Widget/Singlepage/admin-v2-table",
  component: NotificationModuleWidget,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof NotificationModuleWidget>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
