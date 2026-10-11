import type { Meta, StoryObj } from "@storybook/react";

import { EcommerceOrderCheckoutConfirmationDefault } from "./Component";

const meta = {
  id: "modules-host-models-page-singlepage-rbac-module-subject-me-ecommerce-module-order-checkout-confirmation",
  title:
    "Modules/Host/Page/Singlepage/rbac-module-subject-me-ecommerce-module-order-checkout-confirmation",
  component: EcommerceOrderCheckoutConfirmationDefault,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof EcommerceOrderCheckoutConfirmationDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
