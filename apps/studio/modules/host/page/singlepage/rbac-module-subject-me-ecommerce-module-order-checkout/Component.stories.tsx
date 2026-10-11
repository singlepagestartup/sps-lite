import type { Meta, StoryObj } from "@storybook/react";

import { EcommerceOrderCheckoutDetailsDefault } from "./Component";

const meta = {
  id: "modules-host-models-page-singlepage-rbac-module-subject-me-ecommerce-module-order-checkout",
  title:
    "Modules/Host/Page/Singlepage/rbac-module-subject-me-ecommerce-module-order-checkout",
  component: EcommerceOrderCheckoutDetailsDefault,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof EcommerceOrderCheckoutDetailsDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
