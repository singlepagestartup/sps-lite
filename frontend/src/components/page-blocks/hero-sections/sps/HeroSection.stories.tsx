import { Meta, StoryObj } from "@storybook/react";
import SpsHeroSections from ".";
import { entity } from "~redux/services/backend/components/page-blocks/hero-section-block/mock/sps";

const meta = { component: SpsHeroSections } satisfies Meta<
  typeof SpsHeroSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Split: Story = {
  args: { ...entity, variant: "split" },
};
