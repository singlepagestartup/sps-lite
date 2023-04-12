import { Meta, StoryObj } from "@storybook/react";
import FeatureSections from ".";
import { spsLiteBackendFeatureSectionBlockWithIcon } from "~mocks/components/page-blocks/sps-lite";

const meta = { component: FeatureSections } satisfies Meta<
  typeof FeatureSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  args: spsLiteBackendFeatureSectionBlockWithIcon,
};
