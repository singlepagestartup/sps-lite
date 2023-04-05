import { Meta, StoryObj } from "@storybook/react";
import { spsLiteBackendHeroSectionBlockSimpleCentered } from "~mocks/components/page-blocks/sps-lite";
import SpsLiteHeroSections from ".";

const meta = { component: SpsLiteHeroSections } satisfies Meta<
  typeof SpsLiteHeroSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: spsLiteBackendHeroSectionBlockSimpleCentered,
};
