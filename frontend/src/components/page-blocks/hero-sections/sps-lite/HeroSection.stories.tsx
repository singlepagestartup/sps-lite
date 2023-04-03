import { Meta, StoryObj } from "@storybook/react";
import HeroSections from "..";
import { backendHeroSectionBlockSimpleCentered } from "~mocks/components/page-blocks";

const meta = { component: HeroSections } satisfies Meta<typeof HeroSections>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: backendHeroSectionBlockSimpleCentered,
};
