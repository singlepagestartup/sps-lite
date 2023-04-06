import { Meta, StoryObj } from "@storybook/react";
import FeatureSections from ".";
import { spsLiteBackendFeatureSectionBlockWithProductScreenshot } from "~mocks/components/page-blocks/sps-lite";

const meta = { component: FeatureSections } satisfies Meta<
  typeof FeatureSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const WithProductScreenshot: Story = {
  args: spsLiteBackendFeatureSectionBlockWithProductScreenshot,
};

export const CenteredTwoXTwoGrid: Story = {
  args: {
    ...spsLiteBackendFeatureSectionBlockWithProductScreenshot,
    variant: `centered-two-x-two-grid`,
  },
};
