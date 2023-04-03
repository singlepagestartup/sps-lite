import { Meta, StoryObj } from "@storybook/react";
import Pricings from ".";
import { backendPricingBlocktwoTiersWithExtraTier } from "~mocks/page-blocks";

const meta = { component: Pricings } satisfies Meta<typeof Pricings>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: backendPricingBlocktwoTiersWithExtraTier,
};
