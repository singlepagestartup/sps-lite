import { Meta, StoryObj } from "@storybook/react";
import Pricings from "..";
import { backendPricingBlockSinglePriceWithDetails } from "~mocks/components/page-blocks";

const meta = { component: Pricings } satisfies Meta<typeof Pricings>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SinglePriceWithDetails: Story = {
  args: backendPricingBlockSinglePriceWithDetails,
};
