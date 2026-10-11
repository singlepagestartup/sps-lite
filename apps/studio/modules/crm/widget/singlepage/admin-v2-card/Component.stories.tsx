import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as CrmModuleWidget } from "../../index";

import fixture from "../admin-v2-table/data.json";

const meta = {
  id: "modules-crm-models-widget-singlepage-admin-v2-card",
  title: "Modules/CRM/Widget/Singlepage/admin-v2-card",
  component: CrmModuleWidget,
  args: { variant: "admin-v2-card", id: fixture.records[0].id },
  argTypes: { id: { control: "text" } },
} satisfies Meta<typeof CrmModuleWidget>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
