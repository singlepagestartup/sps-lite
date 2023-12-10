import { Meta, StoryObj } from "@storybook/react";
import FeatureSections from ".";
import { entity } from "~redux/services/backend/components/page-blocks/features-section-block/mock/sps-lite";

const meta = { component: FeatureSections } satisfies Meta<
  typeof FeatureSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  args: { ...entity, variant: "with-icon" },
};
