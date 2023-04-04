import { Meta, StoryObj } from "@storybook/react";
import Incentives from "..";
import { backendIncentivesBlockFourColumnWithIllustrations } from "~mocks/components/page-blocks";

const meta = { component: Incentives } satisfies Meta<typeof Incentives>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnWithIllustrations: Story = {
  args: backendIncentivesBlockFourColumnWithIllustrations,
};
