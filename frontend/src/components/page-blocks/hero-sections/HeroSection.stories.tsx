import { Meta } from "@storybook/react";
import SpsHeroSections from ".";
import { SimpleCentered as SpsLiteSimpleCentered } from "./sps-lite/HeroSection.stories";
import { Split as SpsSplit } from "./sps/HeroSection.stories";

const meta = { component: SpsHeroSections } satisfies Meta<
  typeof SpsHeroSections
>;
export default meta;

export const SimpleCentered = SpsLiteSimpleCentered;

export const Split = SpsSplit;
