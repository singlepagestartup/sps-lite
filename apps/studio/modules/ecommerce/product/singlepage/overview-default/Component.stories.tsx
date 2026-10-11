import type { Meta, StoryObj } from "@storybook/react";

import {
  ProductOverviewDefault,
  defaultProductOverviewDefaultProps,
} from "./Component";

const meta = {
  id: "modules-ecommerce-models-product-singlepage-overview-default",
  title: "Modules/Ecommerce/Product/Singlepage/overview-default",
  component: ProductOverviewDefault,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultProductOverviewDefaultProps,
} satisfies Meta<typeof ProductOverviewDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
