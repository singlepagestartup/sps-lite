import { Meta, StoryObj } from "@storybook/react";
import { backendFooterFourColumnsWithCompanyMission } from "~mocks/models";
import Footers from ".";

const meta = { component: Footers } satisfies Meta<typeof Footers>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnsSimple: Story = {
  args: backendFooterFourColumnsWithCompanyMission,
};

export const FourColumnWithCompanyMission: Story = {
  args: {
    ...FourColumnsSimple.args,
    variant: `four-columns-with-company-mission`,
  },
};

export const FourColumnsSimpleDark: Story = {
  args: {
    ...FourColumnsSimple.args,
    variant: `four-columns-simple-dark`,
  },
};
