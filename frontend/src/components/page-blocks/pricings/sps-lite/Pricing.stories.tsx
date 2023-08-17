import { Meta, StoryObj } from "@storybook/react";
import Pricings from ".";
import { spsLiteBackendPricingBlockTwoColumns } from "~mocks/components/page-blocks/sps-lite";

const meta = { component: Pricings } satisfies Meta<typeof Pricings>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TwoColumnsCard: Story = {
  args: spsLiteBackendPricingBlockTwoColumns,
};
