import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as BillingModuleCurrency } from "../../index";

const meta = {
  id: "modules-billing-models-currency-singlepage-admin-v2-table",
  title: "Modules/Billing/Currency/Singlepage/admin-v2-table",
  component: BillingModuleCurrency,
  argTypes: { empty: { control: "boolean" } },
  args: { variant: "admin-v2-table", empty: false },
} satisfies Meta<typeof BillingModuleCurrency>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Empty: Story = { args: { empty: true } };
