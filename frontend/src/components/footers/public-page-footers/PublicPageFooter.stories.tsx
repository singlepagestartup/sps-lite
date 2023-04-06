import { Meta, StoryObj } from "@storybook/react";
import PublicPageFooters from ".";
import { FourColumnsWithCompanyMission as SpsLiteFourColumnsWithCompanyMission } from "./sps-lite/PublicPageFooter.stories";

const meta = { component: PublicPageFooters } satisfies Meta<
  typeof PublicPageFooters
>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FourColumnsWithCompanyMission =
  SpsLiteFourColumnsWithCompanyMission;
