import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component as BillingModulePaymentIntent } from "../../index";

import fixture from "../admin-v2-table/data.json";

const meta = {
  id: "modules-billing-models-payment-intent-singlepage-admin-v2-card",
  title: "Modules/Billing/Payment-Intent/Singlepage/admin-v2-card",
  component: BillingModulePaymentIntent,
  args: { variant: "admin-v2-card", id: fixture.records[0].id },
  argTypes: { id: { control: "text" } },
} satisfies Meta<typeof BillingModulePaymentIntent>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
