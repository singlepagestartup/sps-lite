import type { Meta, StoryObj } from "@storybook/react";

import { EcommerceCartFlowDefault } from "./Component";

const meta = {
  id: "modules-host-models-page-singlepage-ecommerce-module-product-slug",
  title: "Modules/Host/Page/Singlepage/ecommerce-module-product-slug",
  component: EcommerceCartFlowDefault,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof EcommerceCartFlowDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
