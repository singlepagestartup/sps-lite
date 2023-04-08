import { Meta, StoryObj } from "@storybook/react";
import Incentives from ".";
import { spsLiteBackendFooterBlockSimple } from "~mocks/components/page-blocks/sps-lite";

const meta = { component: Incentives } satisfies Meta<typeof Incentives>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnWithIllustrations: Story = {
  args: spsLiteBackendFooterBlockSimple,
};
