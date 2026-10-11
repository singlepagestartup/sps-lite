import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as CrmModuleStep } from "../../index";

import fixture from "../admin-v2-table/data.json";

const meta = {
  id: "modules-crm-models-step-singlepage-admin-v2-card",
  title: "Modules/CRM/Step/Singlepage/admin-v2-card",
  component: CrmModuleStep,
  args: { variant: "admin-v2-card", id: fixture.records[0].id },
  argTypes: { id: { control: "text" } },
} satisfies Meta<typeof CrmModuleStep>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
