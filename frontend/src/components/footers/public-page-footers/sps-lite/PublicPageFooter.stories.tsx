import { Meta, StoryObj } from "@storybook/react";
import PublicPageFooters from "..";
import { backendPublicPageFooterFourColumnsWithCompanyMission } from "~mocks/single-types";

const meta = { component: PublicPageFooters } satisfies Meta<
  typeof PublicPageFooters
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnsWithCompanyMission: Story = {
  args: backendPublicPageFooterFourColumnsWithCompanyMission,
};
