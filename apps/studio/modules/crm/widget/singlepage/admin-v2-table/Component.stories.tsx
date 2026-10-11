import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as CrmModuleWidget } from "../../index";

const meta = {
  id: "modules-crm-models-widget-singlepage-admin-v2-table",
  title: "Modules/CRM/Widget/Singlepage/admin-v2-table",
  component: CrmModuleWidget,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof CrmModuleWidget>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
