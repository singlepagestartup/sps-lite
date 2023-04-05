import { Meta, StoryObj } from "@storybook/react";
import SpsHeroSections from ".";
import { spsBackendHeroSectionBlockSplit } from "~mocks/components/page-blocks/sps";

const meta = { component: SpsHeroSections } satisfies Meta<
  typeof SpsHeroSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Split: Story = {
  args: spsBackendHeroSectionBlockSplit,
};
