import type { Meta, StoryObj } from "@storybook/react";

import { EcommerceOrderCheckoutPaymentDefault } from "./Component";

const meta = {
  id: "modules-host-models-page-singlepage-rbac-module-subject-me-ecommerce-module-order-checkout-payment",
  title:
    "Modules/Host/Page/Singlepage/rbac-module-subject-me-ecommerce-module-order-checkout-payment",
  component: EcommerceOrderCheckoutPaymentDefault,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof EcommerceOrderCheckoutPaymentDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
