import { Meta, StoryObj } from "@storybook/react";
import FeatureSections from "..";
import { backendFeatureSectionBlockWithProductScreenshot } from "~mocks/components/page-blocks";

const meta = { component: FeatureSections } satisfies Meta<
  typeof FeatureSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const WithProductScreenshot: Story = {
  args: backendFeatureSectionBlockWithProductScreenshot,
};

export const CenteredTwoXTwoGrid: Story = {
  args: {
    ...backendFeatureSectionBlockWithProductScreenshot,
    variant: `centered-two-x-two-grid`,
  },
};
