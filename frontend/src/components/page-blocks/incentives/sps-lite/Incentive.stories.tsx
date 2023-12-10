import { Meta, StoryObj } from "@storybook/react";
import Incentives from ".";
import { entity } from "~redux/services/backend/components/page-blocks/incentives-block/mock/sps-lite";

const meta = { component: Incentives } satisfies Meta<typeof Incentives>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnWithIllustrations: Story = {
  args: { ...entity, variant: "four-column-with-illustrations" },
};
