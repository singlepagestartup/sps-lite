import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as NotificationModuleWidget } from "../../index";

import fixture from "../admin-v2-table/data.json";

const meta = {
  id: "modules-notification-models-widget-singlepage-admin-v2-card",
  title: "Modules/Notification/Widget/Singlepage/admin-v2-card",
  component: NotificationModuleWidget,
  args: { variant: "admin-v2-card", id: fixture.records[0].id },
  argTypes: { id: { control: "text" } },
} satisfies Meta<typeof NotificationModuleWidget>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
