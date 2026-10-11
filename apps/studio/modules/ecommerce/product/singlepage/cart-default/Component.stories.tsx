import type { Meta, StoryObj } from "@storybook/react";

import {
  ProductCartDefault,
  defaultProductCartDefaultProps,
} from "./Component";

const meta = {
  id: "modules-ecommerce-models-product-singlepage-cart-default",
  title: "Modules/Ecommerce/Product/Singlepage/cart-default",
  component: ProductCartDefault,
  parameters: {
    layout: "padded",
  },
  args: defaultProductCartDefaultProps,
} satisfies Meta<typeof ProductCartDefault>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};

export const Compact: Story = {
  name: "compact",
  args: {
    compact: true,
    showRemove: false,
  },
};
