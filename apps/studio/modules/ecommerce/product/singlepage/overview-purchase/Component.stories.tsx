import type { Meta, StoryObj } from "@storybook/react";

import {
  ProductOverviewPurchase,
  defaultProductOverviewPurchaseProps,
} from "./Component";

const meta = {
  id: "modules-ecommerce-models-product-singlepage-overview-purchase",
  title: "Modules/Ecommerce/Product/Singlepage/overview-purchase",
  component: ProductOverviewPurchase,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultProductOverviewPurchaseProps,
} satisfies Meta<typeof ProductOverviewPurchase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
