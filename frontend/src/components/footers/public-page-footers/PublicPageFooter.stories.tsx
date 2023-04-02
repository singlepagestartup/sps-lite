import { Meta, StoryObj } from "@storybook/react";
import { backendPublicPageFooterFourColumnsWithCompanyMission } from "~mocks/models";
import PublicPageFooters from ".";

const meta = { component: PublicPageFooters } satisfies Meta<
  typeof PublicPageFooters
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnsSimple: Story = {
  args: backendPublicPageFooterFourColumnsWithCompanyMission,
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
