import { Meta, StoryObj } from "@storybook/react";
import Faqs from ".";
import { spsLiteBackendFaqBlockTwoColumnsWithCenteredIntroduction } from "~mocks/components/page-blocks/sps-lite";

const meta = { component: Faqs } satisfies Meta<typeof Faqs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TwoColumnsWithCenteredIntroduction: Story = {
  args: spsLiteBackendFaqBlockTwoColumnsWithCenteredIntroduction,
};
