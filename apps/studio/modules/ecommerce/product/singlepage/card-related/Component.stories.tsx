import type { Meta, StoryObj } from "@storybook/react";

import {
  ProductCardRelated,
  defaultProductCardRelatedProps,
} from "./Component";

const meta = {
  id: "modules-ecommerce-models-product-singlepage-card-related",
  title: "Modules/Ecommerce/Product/Singlepage/card-related",
  component: ProductCardRelated,
  parameters: {
    layout: "padded",
  },
  args: defaultProductCardRelatedProps,
} satisfies Meta<typeof ProductCardRelated>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
