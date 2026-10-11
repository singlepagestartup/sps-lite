import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as BillingModuleCurrency } from "../../index";
const meta = {
  id: "modules-billing-models-currency-singlepage-list",
  title: "Modules/Billing/Currency/Singlepage/list",
  component: BillingModuleCurrency,
  args: { variant: "list", count: 3, empty: false },
  argTypes: {
    count: { control: { type: "number", min: 0, max: 50 } },
    empty: { control: "boolean" },
  },
} satisfies Meta<typeof BillingModuleCurrency>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Empty: Story = { args: { empty: true } };
export const Many: Story = { args: { count: 20 } };
