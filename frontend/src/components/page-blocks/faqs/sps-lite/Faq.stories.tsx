import { Meta, StoryObj } from "@storybook/react";
import Faqs from ".";
import { entity as faqBlock } from "~redux/services/backend/components/page-blocks/faqs-block/mock/sps-lite";

const meta = { component: Faqs } satisfies Meta<typeof Faqs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TwoColumnsWithCenteredIntroduction: Story = {
  args: { ...faqBlock, variant: "two-columns-with-centered-introduction" },
};
