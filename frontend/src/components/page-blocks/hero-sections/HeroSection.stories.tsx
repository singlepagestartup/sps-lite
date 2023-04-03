import { Meta, StoryObj } from "@storybook/react";
import HeroSections from ".";
import { backendHeroSectionBlockSimpleCentered } from "~mocks/page-blocks";

const meta = { component: HeroSections } satisfies Meta<typeof HeroSections>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: backendHeroSectionBlockSimpleCentered,
};

export const WithAppScreenshot: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `with-app-screenshot`,
  },
};

export const Split: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `split`,
  },
};

export const SplitWithScreenshotOnDark: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `split-with-screenshot-on-dark`,
  },
};

export const WithAngledImageOnRight: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `with-angled-image-on-right`,
  },
};
