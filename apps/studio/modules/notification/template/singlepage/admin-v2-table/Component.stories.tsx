import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as NotificationModuleTemplate } from "../../index";

const meta = {
  id: "modules-notification-models-template-singlepage-admin-v2-table",
  title: "Modules/Notification/Template/Singlepage/admin-v2-table",
  component: NotificationModuleTemplate,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof NotificationModuleTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
