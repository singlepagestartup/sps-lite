import type { Meta, StoryObj } from "@storybook/react";
import {
  ProductFindCard as ProductFindCardComponent,
  defaultProductFindCardProps,
} from "./Component";

const meta = {
  id: "modules-ecommerce-models-widget-singlepage-product-find-card",
  title: "Modules/Ecommerce/Widget/Singlepage/product-find-card",
  component: ProductFindCardComponent,
  parameters: { layout: "fullscreen" },
  args: defaultProductFindCardProps,
} satisfies Meta<typeof ProductFindCardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: "default",
};
