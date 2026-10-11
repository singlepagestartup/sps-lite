import type { Meta, StoryObj } from "@storybook/react";

import {
  ProductOverviewCta,
  defaultProductOverviewCtaProps,
} from "./Component";

const meta = {
  id: "modules-ecommerce-models-product-singlepage-overview-cta",
  title: "Modules/Ecommerce/Product/Singlepage/overview-cta",
  component: ProductOverviewCta,
  parameters: {
    layout: "fullscreen",
  },
  args: defaultProductOverviewCtaProps,
} satisfies Meta<typeof ProductOverviewCta>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
