import type { Meta, StoryObj } from "@storybook/react";

import {
  ProductFindTiers as ProductFindTiersComponent,
  defaultProductFindTiersProps,
} from "./Component";

const meta = {
  id: "modules-ecommerce-models-widget-singlepage-product-find-tiers",
  title: "Modules/Ecommerce/Widget/Singlepage/product-find-tiers",
  component: ProductFindTiersComponent,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultProductFindTiersProps,
} satisfies Meta<typeof ProductFindTiersComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
