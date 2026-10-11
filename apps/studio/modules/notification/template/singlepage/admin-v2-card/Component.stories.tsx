import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as NotificationModuleTemplate } from "../../index";

import fixture from "../admin-v2-table/data.json";

const meta = {
  id: "modules-notification-models-template-singlepage-admin-v2-card",
  title: "Modules/Notification/Template/Singlepage/admin-v2-card",
  component: NotificationModuleTemplate,
  args: { variant: "admin-v2-card", id: fixture.records[0].id },
  argTypes: { id: { control: "text" } },
} satisfies Meta<typeof NotificationModuleTemplate>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
