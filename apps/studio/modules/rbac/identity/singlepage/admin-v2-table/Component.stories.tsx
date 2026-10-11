import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as RbacModuleIdentity } from "../../index";

const meta = {
  id: "modules-rbac-models-identity-singlepage-admin-v2-table",
  title: "Modules/RBAC/Identity/Singlepage/admin-v2-table",
  component: RbacModuleIdentity,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof RbacModuleIdentity>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
