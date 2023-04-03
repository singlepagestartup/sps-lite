import { Meta, StoryObj } from "@storybook/react";
import Incentives from ".";
import { backendIncentivesBlockFourColumnWithIllustrations } from "~mocks/components/page-blocks/sps-lite";

const meta = { component: Incentives } satisfies Meta<typeof Incentives>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnWithIllustrations: Story = {
  args: backendIncentivesBlockFourColumnWithIllustrations,
};

export const ThreeColumnWithIcons: Story = {
  args: {
    ...FourColumnWithIllustrations.args,
    variant: `three-column-with-icons`,
  },
};

export const ThreeColumnWithIconsAndSupportingText: Story = {
  args: {
    ...FourColumnWithIllustrations.args,
    variant: `three-column-with-icons-and-supporting-text`,
  },
};

export const ThreeColumnWithIllustrationsAndCenteredText: Story = {
  args: {
    ...FourColumnWithIllustrations.args,
    variant: `three-column-with-illustrations-and-centered-text`,
  },
};

export const ThreeColumnWithIllustrationsAndHeader: Story = {
  args: {
    ...FourColumnWithIllustrations.args,
    variant: `three-column-with-illustrations-and-header`,
  },
};

export const ThreeColumnWithIllustrationsAndHeading: Story = {
  args: {
    ...FourColumnWithIllustrations.args,
    variant: `three-column-with-illustrations-and-heading`,
  },
};

export const ThreeColumnWithIllustrationsAndSplitHeader: Story = {
  args: {
    ...FourColumnWithIllustrations.args,
    variant: `three-column-with-illustrations-and-split-header`,
  },
};

export const TwoXTwoGridWithIllustrations: Story = {
  args: {
    ...FourColumnWithIllustrations.args,
    variant: `two-x-two-grid-with-illustrations`,
  },
};
