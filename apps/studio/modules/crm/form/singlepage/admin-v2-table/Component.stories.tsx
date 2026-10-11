import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as CrmModuleForm } from "../../index";

const meta = {
  id: "modules-crm-models-form-singlepage-admin-v2-table",
  title: "Modules/CRM/Form/Singlepage/admin-v2-table",
  component: CrmModuleForm,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof CrmModuleForm>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
