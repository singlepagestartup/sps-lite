import { Meta, StoryObj } from "@storybook/react";
import Pricings from ".";
import { entity } from "~redux/services/backend/components/page-blocks/pricing-block/mock/sps-lite";

const meta = { component: Pricings } satisfies Meta<typeof Pricings>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TwoColumnsCard: Story = {
  args: { ...entity, variant: "two-columns-card" },
};
