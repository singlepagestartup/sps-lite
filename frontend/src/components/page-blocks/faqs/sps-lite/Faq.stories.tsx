import { Meta, StoryObj } from "@storybook/react";
import Faqs from "..";
import { backendFaqBlockTwoColumnsWithCenteredIntroduction } from "~mocks/components/page-blocks";

const meta = { component: Faqs } satisfies Meta<typeof Faqs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TwoColumnsWithCenteredIntroduction: Story = {
  args: backendFaqBlockTwoColumnsWithCenteredIntroduction,
};
