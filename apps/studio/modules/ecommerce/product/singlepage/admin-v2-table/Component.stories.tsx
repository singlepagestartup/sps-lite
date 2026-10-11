import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as EcommerceModuleProduct } from "../../index";

const meta = {
  id: "modules-ecommerce-models-product-singlepage-admin-v2-table",
  title: "Modules/Ecommerce/Product/Singlepage/admin-v2-table",
  component: EcommerceModuleProduct,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof EcommerceModuleProduct>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
