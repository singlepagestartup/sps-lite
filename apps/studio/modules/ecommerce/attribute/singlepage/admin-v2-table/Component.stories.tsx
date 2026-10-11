import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as EcommerceModuleAttribute } from "../../index";

const meta = {
  id: "modules-ecommerce-models-attribute-singlepage-admin-v2-table",
  title: "Modules/Ecommerce/Attribute/Singlepage/admin-v2-table",
  component: EcommerceModuleAttribute,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof EcommerceModuleAttribute>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
