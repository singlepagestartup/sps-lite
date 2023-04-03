import { Meta, StoryObj } from "@storybook/react";
import HeaderSections from ".";
import { backendHeaderSectionBlockSimpleCentered } from "~mocks/components/page-blocks";

const meta = { component: HeaderSections } satisfies Meta<
  typeof HeaderSections
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleCentered: Story = {
  args: backendHeaderSectionBlockSimpleCentered,
};

export const BrandedWithBackgroundImage: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `branded-with-background-image`,
  },
};
export const SimpleWithSelectMenu: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `simple-with-select-menu`,
  },
};
export const SimpleWithSelectMenuDark: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `simple-with-select-menu-dark`,
  },
};
export const WithBackgroundImageAndOverlappingCards: Story = {
  args: {
    ...SimpleCentered.args,
    variant: `with-background-image-and-overlapping-cards`,
  },
};
