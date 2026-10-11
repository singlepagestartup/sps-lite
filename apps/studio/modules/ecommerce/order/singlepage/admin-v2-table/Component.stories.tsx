import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as EcommerceModuleOrder } from "../../index";

const meta = {
  id: "modules-ecommerce-models-order-singlepage-admin-v2-table",
  title: "Modules/Ecommerce/Order/Singlepage/admin-v2-table",
  component: EcommerceModuleOrder,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof EcommerceModuleOrder>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
