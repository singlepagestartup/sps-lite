import { Meta, StoryObj } from "@storybook/react";
import { spsLiteBackendHeroSectionBlockSimpleCentered } from "~mocks/components/page-blocks/sps-lite";
import SpsLiteHeroSections from ".";
import HeroSections from "./index";

const meta = { component: HeroSections } satisfies Meta<typeof HeroSections>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: spsLiteBackendHeroSectionBlockSimpleCentered,
};
