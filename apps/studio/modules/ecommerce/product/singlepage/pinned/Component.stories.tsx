import type { Meta, StoryObj } from "@storybook/react";

import { ProductPinned, defaultProductPinnedProps } from "./Component";

const meta = {
  id: "modules-ecommerce-models-product-singlepage-pinned",
  title: "Modules/Ecommerce/Product/Singlepage/pinned",
  component: ProductPinned,
  parameters: {
    layout: "padded",
  },
  args: defaultProductPinnedProps,
} satisfies Meta<typeof ProductPinned>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
